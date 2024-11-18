import { useState } from "react";
import EducationData from "../../interfaces/EducationData";

const EducationForm: React.FC = () => {
  const [educationData, setEducationData] = useState<EducationData[]>([]);

  const handleEducationChange = (index: number, field: string, value: any) => {
    const updatedEducation = [...educationData];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setEducationData(updatedEducation);
  };

  const handleAddEducation = () => {
    setEducationData([
      ...educationData,
      {
        educationId: Date.now().toString(),
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: new Date(),
        endDate: new Date(),
      },
    ]);
  };

  return (
    <div className="ed-form">
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
                    handleEducationChange(index, "institution", e.target.value)
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
    </div>
  );
};

export default EducationForm;
