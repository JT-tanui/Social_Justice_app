import React, { useState } from 'react';
import { FaBell, FaBars, FaUserCircle, FaHome, FaForumbee, FaEnvelope, FaSearch, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownNotificationVisible, setDropdownNotificationVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleDropdownNotification = () => {
    setDropdownNotificationVisible(!dropdownNotificationVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="header">
      <div className="header-left">
        <h1>Trending Petitions</h1>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="header-center">
        <div className="profile-menu">
          <Link to="/" className="menu-item"><FaHome /> Home</Link>
          <Link to="/forum" className="menu-item"><FaForumbee /> Forum</Link>
          <Link to="/messages" className="menu-item"><FaEnvelope /> Messages</Link>
          <Link to="/search" className="menu-item"><FaSearch /> Search</Link>
          <Link to="/about" className="menu-item"><FaInfoCircle /> About</Link>
          <Link to="/contact" className="menu-item"><FaPhone /> Contact</Link>
        </div>
      </div>
      <div className="header-right">
        <FaBell className="icon notification-icon" onClick={toggleDropdownNotification} />
        {dropdownNotificationVisible && (
          <div className="dropdown-menu">
            <ul>
              <li>Lorem Lorem</li>
              <li>Lorem Lorem</li>
              <li>Lorem Lorem</li>
              <li>Lorem Lorem</li>
            </ul>
          </div>
        )}
        <div className="profile-menu">
          <FaUserCircle className="icon profile-icon" onClick={toggleDropdown} />
          {dropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/login" className="menu-item">Login</Link>
              <Link to="/register" className="menu-item">Register</Link>
              <Link to="/profile" className="menu-item">Profile</Link>
              <Link to="/user-dashboard" className="menu-item">Dashboard</Link>
              <Link to="/settings" className="menu-item">Settings</Link>
              <Link to="/logout" className="menu-item">Logout</Link>
            </div>
          )}
        </div>
        <FaBars className="icon menu-icon" onClick={toggleMenu} />
        {menuVisible && (
          <div className="dropdown-menu">
            <Link to="/" className="menu-item"><FaHome /> Home</Link>
            <Link to="/forum" className="menu-item"><FaForumbee /> Forum</Link>
            <Link to="/messages" className="menu-item"><FaEnvelope /> Messages</Link>
            <Link to="/search" className="menu-item"><FaSearch /> Search</Link>
            <Link to="/about" className="menu-item"><FaInfoCircle /> About</Link>
            <Link to="/contact" className="menu-item"><FaPhone /> Contact</Link>
            <Link to="/logout" className="menu-item">Logout</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;