import dotenv from 'dotenv';
dotenv.config();
import { User, Resume, Education, Projects } from '../models/index.js';
import { signToken, AuthenticationError} from '../utils/auth.js';
import OpenAI from 'openai';
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import * as fs from "fs";

// Initialize OpenAI client with the API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Use your OpenAI API key here
});



interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
}

interface Resume {
  _id: string;
  name: string;
  email: string;
  education: typeof Education[];
  experiences: string[];
  projects: typeof Projects[];
  skills: string[];
  contacts: string[];
}

interface AddUserArgs {
  username: string;
  email: string;
  password: string;
}

interface AddResumeArgs {
  name: string;
  email: string;
  education: string[];
  experiences: string[];
  projects: string[];
  skills: string[];
  contacts: string[];
}

interface UpdateUserArgs {
  _id: string;
  username?: string;
  email?: string;
  password?: string;
}


interface GenerateResume {
  input: {
    name: string;
    email: string;
    education: string[];
    experiences: string[];
    projects: string[];
    skills: string[];
    contacts: string[];
  }
}

const resolvers = {
  Query: {

    getUserById: async (_parent: unknown, { _id }: any) => {
      return await Resume.findById({ _id });
    }
  },

  Mutation: {
    addUser: async (_: unknown, { username, email, password }: AddUserArgs): Promise< User> => {
      console.log(username);
      const newUser = await User.create({ username, email, password });
      return newUser;
    },

    login: async (_: unknown, { email, password }: { email: string; password: string }): Promise<{ token: string; profile: User }> => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email');
      }

      const isPasswordCorrect = await user.isCorrectPassword(password);
      if (!isPasswordCorrect) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user.username, user.email, user._id);
      console.log(token);
      return { token, profile: user };
    },

    addResume: async (_: unknown, { name, email, education, experiences, projects, skills, contacts }: AddResumeArgs): Promise<Resume> => {
      return await Resume.create({ name, email, education, experiences, projects, skills, contacts });
    },

    updateUser: async (_: unknown, { _id, username, email, password }: UpdateUserArgs): Promise<User | null> => {
      return await User.findByIdAndUpdate(_id, { username, email, password }, { new: true, runValidators: true });
    },



    deleteResume: async (_: unknown, { _id }: { _id: string }): Promise<Resume | null> => {
      return await Resume.findByIdAndDelete(_id);
    },

    generateResume: async (_parent: any, { input }: GenerateResume) => {
      try { // field is for what area they want ressume to be built in 
        const { name, email, education, experiences, projects, skills, contacts } = input;

        const prompt = `
              Create a professional resume for the following individual
  
              Name: ${name}
              Email: ${email}
              Education: ${education}
              Experiences: ${experiences}
              Projects: ${projects}
              Skills: ${skills}
              Contacts: ${contacts}
  
              Format the document in a professional manner in accorodance to what they selected for Field, and have it be clear and easy to view for each item.
  
          `;
        const response = await openai.chat.completions.create({
          model: "gpt-4",  // You can choose another model (e.g., "gpt-4" or "text-davinci-003")
          messages: [{ role: "user", content: prompt }],
        });

        console.log("OpenAI Response:", response.choices[0].message.content);
        const pdfDoc = await PDFDocument.create();

        // Embed a font
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

        // Add a page to the document
        const page = pdfDoc.addPage([600, 750]);

        // Set font size and text color
        const fontSize = 12;
        const textColor = rgb(0, 0, 0);

        // Write the prompt and response to the PDF
        page.drawText(`${response.choices[0].message.content}`, {
          x: 50,
          y: page.getHeight() - 50,
          size: fontSize,
          font: timesRomanFont,
          color: textColor,
          maxWidth: 500,
          lineHeight: 20,
        });

        // Serialize the PDF to a Uint8Array
        const pdfBytes = await pdfDoc.save();

        // Save the PDF to a file
        fs.writeFileSync("output.pdf", pdfBytes);
        console.log("PDF has been created successfully.");
      




            return response;




    } catch(error) {
      console.error(error);
      return error
    }
  },
},
};

export default resolvers;
