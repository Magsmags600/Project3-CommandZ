import { Schema, Types, Document, ObjectId } from 'mongoose';

interface IProjects extends Document { 
    projectsId:ObjectId;
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
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
      type: Date,
      default: Date.now,
    },
    endDate: {
        type: Date,
        default: Date.now,
        
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
