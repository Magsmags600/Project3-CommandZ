import React, { useState } from "react";
import type { SkillsData } from "../../interfaces/index";

const SkillsForm: React.FC = () => {
  const [skillsData, setSkillsData] = useState<SkillsData>({
    skills: "",
  });

  const handleSkillsChange = (field: string, value: any) => {
    setSkillsData({ ...skillsData, [field]: value });
  };

  return (
    <div className="container profile-form my-5">
      <h1 className="text-center mb-4">Skills Form</h1>
      <div className="row">
        {/* Skills Data Card */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Skills Data</h5>
              <div className="mb-3">
                <label className="form-label">Skills</label>
                <input
                  type="text"
                  className="form-control"
                  value={skillsData.skills}
                  onChange={(e) => handleSkillsChange("skills", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
