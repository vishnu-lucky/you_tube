// Header.js
import React from 'react';
import "../Header.css"


function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="https://tse3.mm.bing.net/th?id=OIP.DYbaRGUNYuDG7ivK9jm9uQHaEK&pid=Api&P=0&h=180" alt="YouTube" />
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
