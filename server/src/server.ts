import express, { Request, Response } from 'express';
import path from 'node:path';
import db from './config/connection.js'
import { ApolloServer } from '@apollo/server';// Note: Import from @apollo/server-express
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schemas/index.js';
import { authenticateToken } from './utils/auth.js';
import { generateResumePDF } from './/PDF_Download/pdfServices.js';
import { Resume } from './models/User.js'; // Import your Resume model
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const startApolloServer = async () => {
  await server.start();
  await db();

  const PORT = process.env.PORT || 3001;
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server as any,
    {
      context: authenticateToken as any
    }
  ));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    })
  };

  app.get('/download-resume/:id', async function (req: Request, res: Response) {
      try {
        // Fetch the resume by ID from the database
        const resume = await Resume.findById(req.params.id);

        if (!resume) {
          return res.status(404).send('Resume not found');
        }

        // Generate and send the PDF response
        generateResumePDF(resume, res);
      } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Internal Server Error');
      }return res.status(200).send('Resume successfully created.');
    });

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

startApolloServer();
