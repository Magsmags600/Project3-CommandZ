
import { useState } from "react";
import ProjectData from "../../interfaces/ProjectData";
import './project.css';




interface ProjectProps{
  projectData:ProjectData[],
  handleAddProject:()=>void,
  handleProjectChange:(index: number, field: string, value: any) =>void
}
const ProjectForm = (props:ProjectProps) => {



  return (
    <div className="project-form">
    <div className="col-md-6 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Project Data</h5>
          {props.projectData.map((proj:any, index:any) => (
            <div key={proj.projectsId} className="mb-3">
              <input
                type="text"
                placeholder="Project Title"
                className="form-control mb-2"
                value={proj.title}
                onChange={(e) =>
                  props.handleProjectChange(index, "title", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Description"
                className="form-control mb-2"
                value={proj.description}
                onChange={(e) =>
                  props.handleProjectChange(index, "description", e.target.value)
                }
              />
              <input
                type="date"
                placeholder="Start Date"
                className="form-control mb-2"
                value={proj.startDate}
                onChange={(e) =>
                  props.handleProjectChange(index, "startDate", e.target.value)
                }
              />
              <input
                type="date"
                placeholder="End Date"
                className="form-control mb-2"
                value={proj.endDate}
                onChange={(e) =>
                  props.handleProjectChange(index, "endDate", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Project Description"
                className="form-control mb-2"
                value={proj.description}
                onChange={(e) =>
                  handleProjectChange(index, "description", e.target.value)
                }
                />
                <input
                type="date"
                placeholder="Project Start Date"
                className="form-control mb-2"
                value={proj.startDate}
                onChange={(e) =>
                  handleProjectChange(index, "startDate", e.target.value)
                }
                />
                <input
                type="date"
                placeholder="Project End date"
                className="form-control mb-2"
                value={proj.endDate}
                onChange={(e) =>
                  handleProjectChange(index, "description", e.target.value)
                }
                />
              {/* Other inputs for description, startDate, etc. */}
            </div>
          ))}
          <button className="btn btn-primary" onClick={()=>props.handleAddProject()}>
            Add Project
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectForm;
