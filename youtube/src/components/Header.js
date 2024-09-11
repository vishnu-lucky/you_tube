// Header.js
import React from 'react';


function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="youtube-logo.png" alt="YouTube" />
      <input className="header__searchInput" type="text" placeholder="Search" />
      <button className="header__searchButton">🔍</button>
      <div className="header__icons">
        <button>🔔</button>
        <button>📷</button>
        <button>👤</button>
      </div>
    </div>
  );
}

export default Header;
