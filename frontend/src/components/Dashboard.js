import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [petitions, setPetitions] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petitionsResponse = await axios.get('/api/petitions');
        const commentsResponse = await axios.get('/api/comments');
        setPetitions(petitionsResponse.data);
        setComments(commentsResponse.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h2>Manage Petitions</h2>
      <ul>
        {petitions.map(petition => (
          <li key={petition._id}>{petition.title}</li>
        ))}
      </ul>
      <h2>Manage Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment._id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;