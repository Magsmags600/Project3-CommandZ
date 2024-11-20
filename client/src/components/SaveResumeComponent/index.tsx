// import { ResumeData } from "../../interfaces";

interface ResumeProps {
  saveResumeData: () => void;
}

const SaveResume = (props: ResumeProps) => {
  return (
    <div className="profile-form">
      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Save Data For Resume</h5>
            <button
              className="btn btn-primary"
              onClick={() => props.saveResumeData()}
            >
              Click to Save Resume Data!!!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveResume;
