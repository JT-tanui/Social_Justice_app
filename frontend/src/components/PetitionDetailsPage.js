import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PetitionDetailsPage = () => {
  const { petitionId } = useParams();
  const history = useHistory();
  const petition = useSelector(state => state.petitions.find(p => p._id === petitionId));

  if (!petition) return <div>Petition not found</div>;

  return (
    <div className="petition-details">
      <h1>{petition.title}</h1>
      <p>{petition.description}</p>
      <p>Upvotes: {petition.upvotes}</p>
      <p>Downvotes: {petition.downvotes}</p>
      <div className="card-actions">
        <button>Upvote</button>
        <button>Downvote</button>
        <button>Follow</button>
        <button>Notify</button>
        <button onClick={() => history.push(`/forum/${petitionId}`)}>Show More</button>
      </div>
    </div>
  );
};

export default PetitionDetailsPage;