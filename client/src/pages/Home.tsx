// import { useQuery } from '@apollo/client';
import { useState } from "react";
import ProfileForm from "../components/ProfileForm";
import EducationForm from "../components/EducationComponent";
import ProjectForm from "../components/ProjectComponent";
import SkillsForm from "../components/SkillsComponent.tsx";
import {
  ResumeData,
  EducationData,
  ProjectData,
  SkillsData,
} from "../interfaces";

const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];
  const [resumeData, setResumeData] = useState({} as ResumeData);
  const [educationData, setEducationData] = useState<EducationData[]>([]);
  // education functions
  const handleEducationChange = (index: number, field: string, value: any) => {
    console.log(typeof value);
    const updatedEducation = [...educationData];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setEducationData(updatedEducation);
    const updatedresumeData = { ...resumeData, education: updatedEducation };
    console.log(updatedresumeData);
    setResumeData(updatedresumeData);
  };

  const handleAddEducation = () => {
    setEducationData([
      ...educationData,
      {
        educationId: Date.now().toString(),
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };
  // project functions
  const [projectData, setProjectData] = useState<ProjectData[]>([]);

  const handleProjectChange = (index: number, field: string, value: any) => {
    const updatedProjects = [...projectData];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setProjectData(updatedProjects);
    const updatedresumeData = { ...resumeData, projects: updatedProjects };
    console.log(updatedresumeData);
    setResumeData(updatedresumeData);
  };

  const handleAddProject = () => {
    setProjectData([
      ...projectData,
      {
        projectsId: Date.now().toString(),
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const [skillsData, setSkillsData] = useState<SkillsData[]>([]);

  const handleSkillsChange = (index: number, field: string, value: any) => {
    const updatedSkills = [...skillsData];
    updatedSkills[index] = { ...updatedSkills[index], [field]: value };
    setSkillsData(updatedSkills);
    const updatedresumeData = { ...resumeData, skills: updatedSkills };
    console.log(updatedresumeData);
    setResumeData(updatedresumeData);
  };

  const handleAddSkill = () => {
    setSkillsData([
      ...skillsData,
      {
        skillsId: Date.now().toString(),
        skills: "",
      },
    ]);
  };

  const [count, setCount] = useState<number>(0);
  const cards = ["profile", "education", "skills", "project"];

  const renderPage = () => {
    switch (cards[count]) {
      case "profile":
        return <ProfileForm />;
      case "education":
        return (
          <EducationForm
            handleAddEducation={handleAddEducation}
            handleEducationChange={handleEducationChange}
            educationData={educationData}
          />
        );
      case "skills":
        return (
          <SkillsForm
            handleAddSkill={handleAddSkill}
            handleSkillsChange={handleSkillsChange}
            skillsData={skillsData}
          />
        );
      case "project":
        return (
          <ProjectForm
            handleAddProject={handleAddProject}
            handleProjectChange={handleProjectChange}
            projectData={projectData}
          />
        );
      default:
        return <ProfileForm />;
    }
  };

  // Function to increment the count fro next step
  const increment = () => {
    if (count < cards.length - 1) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  // Function to decrement the count fro previous step
  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <main>
      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-10 my-3">{renderPage()}</div>

        <div
          className="col-6 col-md-10 my-3 float-left "
          style={{ float: "left" }}
        >
          <button className="btn btn-info" onClick={decrement}>
            PREVIOUS
          </button>
        </div>
        <div
          className="col-6 col-md-10 my-3 float-right"
          style={{ float: "right" }}
        >
          <button className="btn btn-success" onClick={increment}>
            NEXT
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
