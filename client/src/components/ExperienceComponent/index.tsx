
// import { useState } from "react";
import ExperienceData from "../../interfaces/ExperienceData";




interface ExperienceProps{
  experienceData:ExperienceData[],
  handleAddExperience:()=>void,
  handleExperienceChange:(index: number, field: string, value: any) =>void
}
const ExperienceForm = (props:ExperienceProps) => {



  return (
    <div className="ed-form">
      {/* Education Data Card */}
      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Experience Data</h5>
            {props.experienceData.map((exp:any, index:number) => (
              <div key={exp.experiencenId} className="mb-3">
                <input
                  type="text"
                  placeholder="Previous Company Name"
                  className="form-control mb-2"
                  value={exp.institution}
                  onChange={(e) =>
                    props.handleExperienceChange(index, "company", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="form-control mb-2"
                  value={exp.degree}
                  onChange={(e) =>
                    props.handleExperienceChange(index, "description", e.target.value)
                  }
                />
                <input
                  type="date"
                  placeholder="Start Date"
                  className="form-control mb-2"
                  value={exp.startDate}
                  onChange={(e) =>
                    props.handleExperienceChange(index, "startDate", e.target.value)
                  }
                />
                <input
                  type="date"
                  placeholder="End Date"
                  className="form-control mb-2"
                  value={exp.endDate}
                  onChange={(e) =>
                    props.handleExperienceChange(index, "endDate", e.target.value)
                  }
                />
                {/* Other inputs for degree, fieldOfStudy, etc. */}
 
              </div>
              
              
            ))}
            <button className="btn btn-primary" onClick={()=>props.handleAddExperience()}>
              Add Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;
