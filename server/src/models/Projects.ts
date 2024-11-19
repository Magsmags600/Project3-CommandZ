import { Schema, Types, Document, ObjectId } from 'mongoose';

interface IProjects extends Document { 
    projectsId?:ObjectId;
    title: String,
    description: String,
    startDate: String,
    endDate: String,
}

const projectsSchema = new Schema<IProjects>(
  {
    projectsId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    title: {
      type: String,
      required: true,
      maxlength: 25,
    },
    startDate: {
      type: String,
      // default: Date.now,
    },
    endDate: {
        type: String,
        // default: Date.now,
        
      },
      description: {
        type: String,
        required: true,
        maxlength: 25,
      },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

export default projectsSchema ;
