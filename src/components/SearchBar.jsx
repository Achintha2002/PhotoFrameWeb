import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Search functionality to be implemented
        console.log('Searching for:', query);
    };

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSearch}>
                <div className="search-input-wrapper">
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search photos, categories..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
