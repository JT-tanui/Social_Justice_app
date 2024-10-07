import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPetitions } from '../actions/petitionActions';
import '../styles/Homepage.css';
import NavBar from './NavBar';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const petitions = useSelector(state => state.petitions);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchPetitions());
  }, [dispatch]);

  const handleShowMore = (petitionId) => {
    history.push(`/petition/${petitionId}`);
  };

  return (
    <div>
      {/* <NavBar /> */}
      <div className="container">
        <div className="sidebar">
          <h2 className="sidebar-title">Trending Topics</h2>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <div className="card-action">
                <h3>The finance bill</h3>
                <p>Details about the finance bill and its impact.</p>
              </div>
            </li>
            <li className="sidebar-item">
              <div className="card-action">
                <h3>The JKIA Scandal</h3>
                <p>Insights into the JKIA scandal and recent developments.</p>
              </div>
            </li>
            <li className="sidebar-item">
              <div className="card-action">
                <h3>Adani and the chronicles of the politicians</h3>
                <p>Exploring the Adani case and political implications.</p>
              </div>
            </li>
            <li className="sidebar-item">
              <div className="card-action">
                <h3>Climate Change Policies</h3>
                <p>Latest updates on climate change policies and actions.</p>
              </div>
            </li>
            <li className="sidebar-item">
              <div className="card-action">
                <h3>Healthcare Reforms</h3>
                <p>Discussion on the new healthcare reforms and their benefits.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="main-content">
          {petitions.map(petition => (
            <div key={petition._id} className="card">
              <div className="card-header">
                <img src={petition.image} alt={petition.title} className="card-image" />
                <h2>{petition.title}</h2>
              </div>
              <div className="card-body">
                <p>{petition.description}</p>
              </div>
              <div className="card-footer">
                <div className="card-actions">
                  <button>Upvote</button>
                  <button>Downvote</button>
                  <button onClick={() => handleShowMore(petition._id)}>Show More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sidebar">
          <h2 className="sidebar-title">This week: on the watch</h2>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <div to="/kdf" className="card-action">
                <h3>The Kenyan Defense Forces (KDF)</h3>
                <p>Updates and news about the KDF.</p>
              </div>
            </li>
            <li className="sidebar-item">
              <div to="/supreme-court" className="card-action">
                <h3>The Supreme Judiciary Court</h3>
                <p>Recent rulings and news from the Supreme Court.</p>
              </div>
            </li>
            <li className="sidebar-item">
              <div to="/deputy-president" className="card-action">
                <h3>Deputy President</h3>
                <p>News and updates about the Deputy President.</p>
              </div>
            </li>
            <li className="sidebar-item">
              <div to="/climate-change" className="card-action">
                <h3>Climate Change Policies</h3>
                <p>Latest updates on climate change policies and actions.</p>
              </div>
            </li>
            <li className="sidebar-item">
              <div to="/healthcare-reforms" className="card-action">
                <h3>Healthcare Reforms</h3>
                <p>Discussion on the new healthcare reforms and their benefits.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;