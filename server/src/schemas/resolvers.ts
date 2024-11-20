import dotenv from "dotenv";
dotenv.config();
import { User, Resume, Education, Projects,Experience ,Skills} from '../models/index.js';
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
  address:string;
  phone:string;
  education: typeof Education[];
  experiences: typeof Experience[];
  projects: typeof Projects[];
  skills: typeof Skills[];
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
  address:string;
  phone:string;
  education:typeof Education[];
  experiences:typeof Experience[];
  projects: typeof Projects[];
  skills: typeof Skills[];
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
    address:string;
    phone:string;
    education:typeof Education[];
    experiences:typeof Experience[];
    projects: typeof Projects[];
    skills: typeof Skills[];
    contacts: string[];
  }
}

const resolvers = {
  Query: {

    getUserById: async (_parent: unknown, { _id }: any) => {
      return await Resume.findById({ _id });
    },
    me: async (_parent: any, _args: any, context: any) => {
      // If the user is authenticated, find and return the user's information along with their thoughts
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('resume');
      }
      // If the user is not authenticated, throw an AuthenticationError
      throw new AuthenticationError('Could not authenticate user.');
    },


  },

  Mutation: {
    addUser: async (_: unknown, { username, email, password }: AddUserArgs): Promise< User> => {
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

    addResume: async (_: unknown, { name, email,address,phone, education, experiences, projects, skills, contacts }: AddResumeArgs,context:any): Promise<Resume> => {
      if (context.user) {
       
        const resume = await Resume.create({ name, email,address,phone, education, experiences, projects, skills, contacts });

        //  const user =
          await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { resume: resume._id } },
          {new:true}
        );

        return resume;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateUser: async (_: unknown, { _id, username, email, password }: UpdateUserArgs): Promise<User | null> => {
      return await User.findByIdAndUpdate(_id, { username, email, password }, { new: true, runValidators: true });
    },



    deleteResume: async (_: unknown, { _id }: { _id: string }): Promise<Resume | null> => {
      return await Resume.findByIdAndDelete(_id);
    },

    generateResume: async (_parent: any, { input }: GenerateResume) => {
      try { // field is for what area they want ressume to be built in 
        const { name, email,address,phone, education, experiences, projects, skills, contacts } = input;
console.log(input);
        const prompt = `
              Create a professional resume for the following individual
  
              Name: ${name}
              Email: ${email}
              Address: ${address}
              phone: ${phone}
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
      




            return "Pdf Generated!!! ";




    } catch(error) {
      console.error(error);
      return error
    }
  },
},
};

export default resolvers;
