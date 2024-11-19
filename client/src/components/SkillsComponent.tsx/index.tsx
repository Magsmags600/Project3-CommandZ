import SkillsData from "../../interfaces/SkillsData";
import "./skills.css";

interface SkillsProps {
  skillsData: SkillsData[];
  handleAddSkill: () => void;
  handleSkillsChange: (index: number, field: string, value: any) => void;
}
const SkillsForm = (props: SkillsProps) => {
  return (
    <div className="skills-form">
      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Skills Data</h5>
            {props.skillsData.map((skills: any, index: any) => (
              <div key={skills.skillsId} className="mb-3">
                <label className="form-label">Skills: </label>
                <input
                  type="text"
                  placeholder="Skills"
                  className="form-control mb-2"
                  value={skills.skills}
                  onChange={(e) =>
                    props.handleSkillsChange(index, "skills", e.target.value)
                  }
                />
                {/* Other inputs for description, startDate, etc. */}
              </div>
            ))}
            <button
              className="btn btn-primary"
              onClick={() => props.handleAddSkill()}
            >
              Add Skills
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
