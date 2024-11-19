import { Schema, Document } from 'mongoose';


interface IExperience extends Document {
    company: string;
    description: string;
    startDate: string;
    endDate: string;
  }

const experienceSchema = new Schema<IExperience>(
  {

    company: {
      type: String,
      required: true,
      maxlength: 25,
    },
    description: {
      type: String,
      required: true,
      // default: Date.now,
    },
    startDate: {
        type: String,
        // default: Date.now,
      },
    endDate: {
        type: String,
        // default: Date.now,
        
      },

  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

export default experienceSchema ;
