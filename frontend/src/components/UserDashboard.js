import React from 'react';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const user = useSelector(state => state.user);

  return (
    <div className="user-dashboard">
      <h1>Dashboard</h1>
      <h2>Followed Petitions</h2>
      <ul>
        {user.followedPetitions.map(petition => (
          <li key={petition._id}>{petition.title}</li>
        ))}
      </ul>
      <h2>Notifications</h2>
      <ul>
        {user.notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard; 