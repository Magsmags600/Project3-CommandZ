// import { useQuery } from '@apollo/client';
import { useState } from "react";
import ProfileForm from "../components/ProfileForm";
import EducationForm from "../components/EducationComponent";
import ProjectForm from "../components/ProjectComponent";
import SkillsForm from "../components/SkillsComponent.tsx";
import ExperienceForm from "../components/ExperienceComponent/index.tsx";
import SaveResume from "../components/SaveResumeComponent/index.tsx";
import Auth from "../utils/auth.ts"
// import { ADD_RESUME } from "../utils/mutations.ts";
// import { useMutation } from "@apollo/client";
import {
  ResumeData,
  EducationData,
  ExperienceData,
  ProjectData,
  SkillsData,
  ProfileData,
} from "../interfaces";

const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];
  // const [addResume] = useMutation(ADD_RESUME);
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
  // experience functions
  const [experienceData, setExperienceData] = useState<ExperienceData[]>([]);

  const handleExperienceChange = (index: number, field: string, value: any) => {
    console.log(typeof value);
    const updatedExperience = [...experienceData];
    updatedExperience[index] = { ...updatedExperience[index], [field]: value };
    setExperienceData(updatedExperience);
    const updatedresumeData = { ...resumeData, experience: updatedExperience };
    console.log(updatedresumeData);
    setResumeData(updatedresumeData);
  };

  const handleAddExperience = () => {
    setExperienceData([
      ...experienceData,
      {
        company: "",
        description: "",
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
  // skills functions


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
  // profiledata functions
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData);

  const handleProfileChange = (field: string, value: any) => {
    setProfileData({ ...profileData, [field]: value });
    setResumeData({ ...resumeData, name: profileData.name, email: profileData.email, address: profileData.address, phone: profileData.phone })
  };
  const saveResumeData = () => {
    console.log(resumeData);
    // try{
    //   await addResume({
    //     variables:{...resumeData}
    //   })
    // }catch(err){
    //   console.error(err);
    // }

  }

  const [count, setCount] = useState<number>(0);
  const cards = ["profile", "education", "experience", "skills", "project", 'SaveResume'];

  const renderPage = () => {
    switch (cards[count]) {
      case "profile":
        return <ProfileForm handleProfileChange={handleProfileChange} profileData={profileData} />;
      case "education":
        return (
          <EducationForm
            handleAddEducation={handleAddEducation}
            handleEducationChange={handleEducationChange}
            educationData={educationData}
          />
        );
      case "experience":
        return (
          <ExperienceForm
            handleAddExperience={handleAddExperience}
            handleExperienceChange={handleExperienceChange}
            experienceData={experienceData}
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
      case "SaveResume":
        return (
          <SaveResume saveResumeData={saveResumeData} />
        );
      // default:
      //   return <ProfileForm />;
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

    <>
      {Auth.loggedIn() ? (
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
      ) : (<div>Not Authorized !! Pls SignUP/Login......</div>)
      }
    </>
  );
};

export default Home;
