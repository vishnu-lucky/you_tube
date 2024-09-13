// Header.js
import React, { useState } from 'react';
import "../Header.css";

function Header({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState(''); // Local state to store input

  const handleSearch = () => {
    if (inputValue) {
      setSearchTerm(inputValue);  // Pass search term to parent component
    }
  };

  return (
    <div className="header">
      <img className="header__logo" src="https://tse3.mm.bing.net/th?id=OIP.DYbaRGUNYuDG7ivK9jm9uQHaEK&pid=Api&P=0&h=180" alt="YouTube" />
      <input
        className="header__searchInput"
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}  
      />
      <div className="header__icons">
        <button onClick={handleSearch}>
          <img src="https://cdn-icons-png.flaticon.com/128/3128/3128287.png" alt="Search" />  
        </button>
      </div>
    </div>
  );
}

export default Header;
