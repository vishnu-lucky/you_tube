import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Sidebar({ resetSearchTerm }) { 
  const navigate = useNavigate();

  const handleHomeClick = () => {
    resetSearchTerm(); 
    navigate('/');      
  };

  return (
    <div className="sidebar">
      <button onClick={handleHomeClick}>Home</button>
      <button onClick={() => navigate('/trending')}>Trending</button>
      <button onClick={() => navigate('/subscriptions')}>Subscriptions</button>
      <hr />
      <button onClick={() => navigate('/library')}>Library</button>
      <button onClick={() => navigate('/history')}>History</button>
    </div>
  );
}

export default Sidebar;
