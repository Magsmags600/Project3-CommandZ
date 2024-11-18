import React, { useState } from 'react';
import './profile.css';
import type { EducationData, ProjectData, ResumeData, User } from '../../interfaces';

const ProfileForm: React.FC = () => {
  const [userData, setUserData] = useState<User>({
    username: '',
    email: '',
    password: '',
    resume: [],
  });

  const [resumeData, setResumeData] = useState<ResumeData>({
    _id: '',
    name: '',
    email: '',
    education: [],
    experiences: [],
    projects: [],
    skills: [],
    contacts: [],
  });

  const [educationData, setEducationData] = useState<EducationData[]>([]);
  const [projectData, setProjectData] = useState<ProjectData[]>([]);

  const handleUserChange = (field: string, value: any) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleResumeChange = (field: string, value: any) => {
    setResumeData({ ...resumeData, [field]: value });
  };

  const handleEducationChange = (index: number, field: string, value: any) => {
    const updatedEducation = [...educationData];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setEducationData(updatedEducation);
  };

  const handleProjectChange = (index: number, field: string, value: any) => {
    const updatedProjects = [...projectData];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setProjectData(updatedProjects);
  };

  const handleAddEducation = () => {
    setEducationData([
      ...educationData,
      {
        educationId: Date.now().toString(),
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startDate: new Date(),
        endDate: new Date(),
      },
    ]);
  };

  const handleAddProject = () => {
    setProjectData([
      ...projectData,
      {
        projectsId: Date.now().toString(),
        title: '',
        description: '',
        startDate: new Date(),
        endDate: new Date(),
      },
    ]);
  };

  return (
    <div className="container profile-form my-5">
      <h1 className="text-center mb-4">Profile Form</h1>
      <div className="row">
        {/* User Data Card */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Data</h5>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.username || ''}
                  onChange={(e) => handleUserChange('username', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={userData.email || ''}
                  onChange={(e) => handleUserChange('email', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={userData.password || ''}
                  onChange={(e) => handleUserChange('password', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Resume Data Card */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Resume Data</h5>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={resumeData.name || ''}
                  onChange={(e) => handleResumeChange('name', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={resumeData.email || ''}
                  onChange={(e) => handleResumeChange('email', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Skills</label>
                <input
                  type="text"
                  className="form-control"
                  value={resumeData.skills.join(', ') || ''}
                  onChange={(e) =>
                    handleResumeChange(
                      'skills',
                      e.target.value.split(',').map((skill) => skill.trim())
                    )
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contacts</label>
                <input
                  type="text"
                  className="form-control"
                  value={resumeData.contacts.join(', ') || ''}
                  onChange={(e) =>
                    handleResumeChange(
                      'contacts',
                      e.target.value.split(',').map((contact) => contact.trim())
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Education Data Card */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Education Data</h5>
              {educationData.map((edu, index) => (
                <div key={edu.educationId} className="mb-3">
                  <input
                    type="text"
                    placeholder="Institution"
                    className="form-control mb-2"
                    value={edu.institution}
                    onChange={(e) =>
                      handleEducationChange(index, 'institution', e.target.value)
                    }
                  />
                  {/* Other inputs for degree, fieldOfStudy, etc. */}
                </div>
              ))}
              <button className="btn btn-primary" onClick={handleAddEducation}>
                Add Education
              </button>
            </div>
          </div>
        </div>

        {/* Project Data Card */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Project Data</h5>
              {projectData.map((proj, index) => (
                <div key={proj.projectsId} className="mb-3">
                  <input
                    type="text"
                    placeholder="Project Title"
                    className="form-control mb-2"
                    value={proj.title||''}
                    onChange={(e) =>
                      handleProjectChange(index, 'title', e.target.value)
                    }
                  />
                  {/* Other inputs for description, startDate, etc. */}
                </div>
              ))}
              <button className="btn btn-primary" onClick={handleAddProject}>
                Add Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
