import React from 'react';
import '../styles/SettingsPage.css';

const SettingsPage = () => {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form className="settings-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsPage;