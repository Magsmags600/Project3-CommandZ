import React, { useState } from "react";
import "./profile.css";

import type { User } from "../../interfaces";

const ProfileForm: React.FC = () => {
  const [userData, setUserData] = useState<User>({
    username: "",
    email: "",
    password: "",
    resume: [],
  });

  const handleUserChange = (field: string, value: any) => {
    setUserData({ ...userData, [field]: value });
  };

  return (
    <div className="profile-form">
      <div className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Profile Form</h5>
            <div className="mb-3">
              <label className="form-label">Username: </label>
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                value={userData.username || ""}
                onChange={(e) => handleUserChange("username", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email: </label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={userData.email || ""}
                onChange={(e) => handleUserChange("email", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
