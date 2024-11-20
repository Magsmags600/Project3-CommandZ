import { Schema, Document } from 'mongoose';


interface ISkills extends Document {
    skills: string;
  }

const skillsSchema = new Schema<ISkills>(
  {

    skills: {
      type: String,
      required: true,
      maxlength: 25,
    }

  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

export default skillsSchema ;
