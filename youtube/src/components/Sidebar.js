// Sidebar.js
import React from 'react';
import  '../App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <button>Home</button>
      <button>Trending</button>
      <button>Subscriptions</button>
      <hr />
      <button>Library</button>
      <button>History</button>
    </div>
  );
}

export default Sidebar;
