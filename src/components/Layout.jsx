import React from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import '../index.css';

const Layout = ({ children, theme, toggleTheme }) => {
    return (
        <div className="app-container">
            <Navigation theme={theme} toggleTheme={toggleTheme} />
            <main className="main-content">
                <SearchBar />
                {children}
            </main>
        </div>
    );
};

export default Layout;
