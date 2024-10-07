import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const user = useSelector(state => state.user);

  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <p>Joined: {new Date(user.joined).toLocaleDateString()}</p>
      {/* Add more profile details as needed */}
    </div>
  );
};

export default ProfilePage;