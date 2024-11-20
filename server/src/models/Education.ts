import { Schema, Types, Document, ObjectId } from 'mongoose';

interface IEducation extends Document {
  educationId?: ObjectId;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

const educationSchema = new Schema<IEducation>(
  {
    educationId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    institution: {
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
    degree: {
      type: String,
      required: true,
      maxlength: 25,
    },
    fieldOfStudy: {
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

export default educationSchema;
