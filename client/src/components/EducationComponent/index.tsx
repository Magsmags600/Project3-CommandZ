
import { useState } from "react";
import EducationData from "../../interfaces/EducationData";
import './education.css';



interface EducationProps{
  educationData:EducationData[],
  handleAddEducation:()=>void,
  handleEducationChange:(index: number, field: string, value: any) =>void
}
const EducationForm = (props:EducationProps) => {



  return (
    <div className="ed-form">
      {/* Education Data Card */}
      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Education Data</h5>
            {props.educationData.map((edu:any, index:number) => (
              <div key={edu.educationId} className="mb-3">
                <input
                  type="text"
                  placeholder="Institution"
                  className="form-control mb-2"
                  value={edu.institution}
                  onChange={(e) =>
                    props.handleEducationChange(index, "institution", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Degree"
                  className="form-control mb-2"
                  value={edu.degree}
                  onChange={(e) =>
                    props.handleEducationChange(index, "degree", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Field Of Study"
                  className="form-control mb-2"
                  value={edu.fieldOfStudy}
                  onChange={(e) =>
                    props.handleEducationChange(index, "fieldOfStudy", e.target.value)
                  }
                />
                <input
                  type="date"
                  placeholder="Start Date"
                  className="form-control mb-2"
                  value={edu.startDate}
                  onChange={(e) =>
                    props.handleEducationChange(index, "startDate", e.target.value)
                  }
                />
                <input
                  type="date"
                  placeholder="End Date"
                  className="form-control mb-2"
                  value={edu.endDate}
                  onChange={(e) =>
                    props.handleEducationChange(index, "endDate", e.target.value)
                  }
                />
                {/* Other inputs for degree, fieldOfStudy, etc. */}
                < input 
                    type="text"
                    placeholder="Degree"
                    className="form-control mb-2"
                    value={edu.degree}
                    onChange={(e) => 
                      handleEducationChange(index, "degree", e.target.value)
                    }
                    />
                    < input 
                    type="text"
                    placeholder="Field of Study"
                    className="form-control mb-2"
                    value={edu.fieldOfStudy}
                    onChange={(e) => 
                      handleEducationChange(index, "fieldOfStudy", e.target.value)
                    }
                    />
                    < input 
                    type="date"
                    placeholder="Start Date"
                    className="form-control mb-2"
                    value={edu.startDate}
                    onChange={(e) => 
                      handleEducationChange(index, "startDate", e.target.value)
                    }
                    />
                    < input 
                    type="date"
                    placeholder="End Date"
                    className="form-control mb-2"
                    value={edu.endDate}
                    onChange={(e) => 
                      handleEducationChange(index, "endDate", e.target.value)
                    }
                    />
              </div>
              
              
            ))}
            <button className="btn btn-primary" onClick={()=>props.handleAddEducation()}>
              Add Education
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
