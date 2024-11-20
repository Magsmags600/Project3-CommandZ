import { Experience, Projects, Education, Skills } from './index.js';
import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';
// import Education from './Education.js';
// import Projects from './Projects.js';
//interface for the Resume document
interface IResume extends Document {
  _id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  education: typeof Education[];
  experiences: typeof Experience[];
  projects: typeof Projects[];
  skills: typeof Skills[];
  contacts: string[];

}


// Define an interface for the User document
interface IUser extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
  isCorrectPassword(password: string): Promise<boolean>;
  resume: Schema.Types.ObjectId[];
}

// Define the schema for the Resume document
const resumeSchema = new Schema<IResume>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },

    education: [Education],
    projects: [Projects],
    contacts: [
      {
        type: String,
        trim: true,
      }
    ],
    experiences: [Experience],
    skills: [Skills],
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

// Define the schema for the User document
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    resume: [{
      type: Schema.Types.ObjectId,
      ref: 'Resume',
    }],
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

// Middleware to hash passwords before saving for both Resume and User
const hashPassword = async function (this: any, next: any) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
};

// resumeSchema.pre<IResume>('save', hashPassword);
userSchema.pre<IUser>('save', hashPassword);

// Method to compare passwords for both schemas

userSchema.methods.isCorrectPassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

// Create the Resume and User models
const Resume = model<IResume>('Resume', resumeSchema);
const User = model<IUser>('User', userSchema);

export { Resume, User, IResume };
