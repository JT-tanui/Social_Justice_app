import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

const ForumPage = () => {
  const { petitionId } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const socket = io('http://localhost:4000');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/forums/${petitionId}`);
        setComments(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchComments();

    socket.emit('join', petitionId);
    socket.on('comments', (newComments) => {
      setComments(newComments);
    });

    return () => {
      socket.emit('leave', petitionId);
      socket.off();
    };
  }, [petitionId]);

  const handleAddComment = async () => {
    try {
      await axios.post(`/api/forums/${petitionId}`, { text: newComment });
      setComments([...comments, { text: newComment, votes: 0 }]);
      setNewComment('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpvote = (commentId) => {
    socket.emit('upvote', commentId);
  };

  const handleDownvote = (commentId) => {
    socket.emit('downvote', commentId);
  };

  return (
    <div className="forum-page">
      <h1>Forum</h1>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.text}</p>
            <p>Upvotes: {comment.votes}</p>
            <button onClick={() => handleUpvote(comment.id)}>Upvote</button>
            <button onClick={() => handleDownvote(comment.id)}>Downvote</button>
          </li>
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