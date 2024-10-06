import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ForumPage = ({ match }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/forums/${match.params.petitionId}`);
        setComments(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchComments();
  }, [match.params.petitionId]);

  const handleAddComment = async () => {
    try {
      await axios.post(`/api/forums/${match.params.petitionId}`, { text: newComment });
      setComments([...comments, { text: newComment, votes: 0 }]);
      setNewComment('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Forum</h1>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default ForumPage;