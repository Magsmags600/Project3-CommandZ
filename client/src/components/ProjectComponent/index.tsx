import { useState } from "react";
import ProjectData from "../../interfaces/ProjectData";
import './project.css';

const ProjectForm: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);

  const handleProjectChange = (index: number, field: string, value: any) => {
    const updatedProjects = [...projectData];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setProjectData(updatedProjects);
  };

  const handleAddProject = () => {
    setProjectData([
      ...projectData,
      {
        projectsId: Date.now().toString(),
        title: "",
        description: "",
        startDate: new Date(),
        endDate: new Date(),
      },
    ]);
  };

  return (
    <div className="project-form">
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
                value={proj.title}
                onChange={(e) =>
                  handleProjectChange(index, "title", e.target.value)
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
  );
};

export default ProjectForm;
