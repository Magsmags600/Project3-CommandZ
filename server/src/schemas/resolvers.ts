import { User, Resume, Education, Projects } from '../models/index.js';
import { signToken, AuthenticationError } from '../utils/auth.js';
import { OpenAI } from '@langchain/openai';

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

interface UpdateResumeArgs {
  _id: string;
  name?: string;
  email?: string;
  education?: string;
  experiences?: string[];
  projects?: string[];
  skills?: string[];
  contacts?: string[];
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
    getAllUsers: async (): Promise<User[]> => {
      return await User.find();
    },

    getAllResumes: async (): Promise<Resume[]> => {
      return await Resume.find();
    },
  },

  Mutation: {
    addUser: async (_: unknown, { username, email, password }: AddUserArgs): Promise<{ token: string; profile: User }> => {
      const newUser = await User.create({ username, email, password });
      const token = signToken(newUser.username, newUser.email, newUser._id);
      return { token, profile: newUser };
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
      return { token, profile: user };
    },

    addResume: async (_: unknown, { name, email, education, experiences, projects, skills, contacts }: AddResumeArgs): Promise<Resume> => {
      return await Resume.create({ name, email, education, experiences, projects, skills, contacts });
    },

    updateUser: async (_: unknown, { _id, username, email, password }: UpdateUserArgs): Promise<User | null> => {
      return await User.findByIdAndUpdate(_id, { username, email, password }, { new: true, runValidators: true });
    },

    updateResume: async (_: unknown, { _id, name, email, education, experiences, projects, skills, contacts }: UpdateResumeArgs): Promise<Resume | null> => {
      return await Resume.findByIdAndUpdate(
        _id,
        { name, email, education, experiences, projects, skills, contacts },
        { new: true, runValidators: true }
      );
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

        const response = await OpenAI.createCompletion({
          model: 'text-davinici-003',
          prompt: prompt,
          max_tokens: 1500,
        });

        const resumeText = response.data.choices[0].text;

        console.log(resumeText);
      } catch (error) {
        console.error(error);
      }
    },
  },
};

export default resolvers;
