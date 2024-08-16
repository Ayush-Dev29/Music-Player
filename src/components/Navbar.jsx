import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <nav className="navbar">
            <img src="https://cdn-icons-png.flaticon.com/512/4812/4812505.png" alt="logo" className="logo" />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for artists or songs..."
                className="search-bar"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
        </nav>
    );
};

export default Navbar;
