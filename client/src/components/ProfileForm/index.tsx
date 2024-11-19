
import "./profile.css";
import { ProfileData } from "../../interfaces";

interface ProfileProps {
  profileData: ProfileData;
  handleProfileChange: (field: string, value: any) => void
}


const ProfileForm = (props: ProfileProps) => {


  return (
    <div className="profile-form">
      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Profile Form</h5>
            <div className="mb-3">
              <label className="form-label">Name: </label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={props.profileData.name || ""}
                onChange={(e) => props.handleProfileChange("name", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email: </label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={props.profileData.email || ""}
                onChange={(e) => props.handleProfileChange("email", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address: </label>
              <input
                type="text"
                placeholder="Address"
                className="form-control"
                value={props.profileData.address || ""}
                onChange={(e) => props.handleProfileChange("address", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone: </label>
              <input
                type="text"
                placeholder="Phone"
                className="form-control"
                value={props.profileData.phone || ""}
                onChange={(e) => props.handleProfileChange("phone", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
