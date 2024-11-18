
import  EducationData  from "./EducationData";
import  ProjectData  from "./ProjectData";
export default interface ResumeData {
  _id: string;
  name: string;
  email: string;
  education: EducationData[];
  experiences: string[];
  projects:  ProjectData[];
  skills: string[];
  contacts: string[];
  }