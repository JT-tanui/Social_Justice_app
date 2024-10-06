import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetitions } from '../actions/petitionActions';
import '../styles/Homepage.css'; // Corrected the import statement
import { FaBell, FaBars, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const petitions = useSelector(state => state.petitions);

  useEffect(() => {
    dispatch(fetchPetitions());
  }, [dispatch]);

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <h1>Trending Petitions</h1>
        </div>
        <div className="header-center">
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>
        <div className="header-right">
          <Link to="/" className="menu-item">Home</Link>
          <Link to="/components/ForumPage/" className="menu-item">Forum</Link>
          <Link to="/messages" className="menu-item">Messages</Link>
          <Link to="/settings" className="menu-item">Settings</Link>
          <FaBell className="icon" />
          <Link to="/UserDashboard" className="menu-item"><FaUserCircle className="icon profile-icon" /></Link>
          <FaBars className="icon" />
        </div>
      </div>
      <div className="container">
        <div className="sidebar">
          <h2><div className="card-actions">Trending Topics</div></h2>
          <ul>
            <li><div className="card-actions">The finance bill</div></li>
            <li><div className="card-actions">The JKIA Scandal</div></li>
            <li><div className="card-actions">Adani and the chronicles of the politicians</div></li>
          </ul>
          <div className="card-actions">The finance bill</div>
          <div className="card-actions">The JKIA Scandal</div>
          <div className="card-actions">Adani and the chronicles of the politicians</div>
        </div>
        <div className="main-content">
          {petitions.map(petition => (
            <div key={petition._id} className="card">
              <img src={petition.image_url} alt={petition.title} className="card-image" />
              <h2>{petition.title}</h2>
              <p>{petition.description}</p>
              <div className="card-actions">
                <button>Upvote</button>
                <button>Downvote</button>
              </div>
            </div>
          ))}
        </div>
        <div className="sidebar">
          <h2><div className="card-actions">This week: on the watch</div></h2>
          <ul>
            <li><div className="card-actions">The Kenyan Defense Forces (KDF)</div></li>
            <li><div className="card-actions">The supreme judiciary court</div></li>
            <li><div className="card-actions">Deputy president</div></li>
          </ul>
          <div className="card-actions">The Kenyan Defense Forces (KDF)</div>
          <div className="card-actions">The supreme judiciary court</div>
          <div className="card-actions">Deputy president</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;