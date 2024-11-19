import React, { useState } from 'react';
import './profile.css';

import type { User } from '../../interfaces';



const ProfileForm: React.FC = () => {
  const [userData, setUserData] = useState<User>({
    username: '',
    email: '',
    password: '',
    resume: [],
  });

  const handleUserChange = (field: string, value: any) => {
    setUserData({ ...userData, [field]: value });
  };

  return (
    <div className="container profile-form my-5">
      <h1 className="text-center mb-4">Profile Form</h1>
      <div className="row">
        {/* User Data Card */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Data</h5>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.username || ''}
                  onChange={(e) => handleUserChange('username', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={userData.email || ''}
                  onChange={(e) => handleUserChange('email', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

      </div>

    
    </div>
  );
};

export default ProfileForm;
