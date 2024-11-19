import React, { useState } from "react";
import type { ExperienceData } from "../../interfaces/index";

const ExperienceForm: React.FC = () => {
  const [experienceData, setExperienceData] = useState<ExperienceData>({
    company: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleExperienceChange = (field: string, value: any) => {
    setExperienceData({ ...experienceData, [field]: value });
  };

  return (
    <div className="container profile-form my-5">
      <h1 className="text-center mb-4">Experience Form</h1>
      <div className="row">
        {/* User Data Card */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Experience Data</h5>
              <div className="mb-3">
                <label className="form-label">Previous Company</label>
                <input
                  type="text"
                  className="form-control"
                  value={experienceData.company}
                  onChange={(e) => handleExperienceChange("company", e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={experienceData.description}
                  onChange={(e) =>
                    handleExperienceChange("description", e.target.value)
                  }
                />
                <div className="mb-3">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={experienceData.startDate}
                    onChange={(e) =>
                      handleExperienceChange("startDate", e.target.value)
                    }
                  />
                  <div className="mb-3">
                    <label className="form-label">End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={experienceData.description}
                      onChange={(e) =>
                        handleExperienceChange("endDate", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;
