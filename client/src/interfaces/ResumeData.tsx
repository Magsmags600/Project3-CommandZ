import EducationData from "./EducationData";
import ProjectData from "./ProjectData";
import ExperienceData from "./ExperienceData";
import SkillsData from "./SkillsData";
export default interface ResumeData {
  _id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  education: EducationData[];
  experiences: ExperienceData[];
  projects: ProjectData[];
  skills: SkillsData[];
  contacts: string[];
}
