import React from 'react';
import { NavLink } from 'react-router-dom';
import { Camera, Grid, Clock, Mail, Sun, Moon } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ theme, toggleTheme }) => {
    return (
        <nav className="side-nav">
            <div className="nav-header">
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <h1 className="logo">Photo Home</h1>
                </NavLink>
                <p className="subtitle">Photography</p>
            </div>

            <ul className="nav-links">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        <Camera className="nav-icon" size={20} />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        <Grid className="nav-icon" size={20} />
                        <span>Gallery</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/categories" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        <Grid className="nav-icon" size={20} />
                        <span>Categories and Prices</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/upcoming" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        <Clock className="nav-icon" size={20} />
                        <span>Upcoming</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        <Mail className="nav-icon" size={20} />
                        <span>Contact</span>
                    </NavLink>
                </li>
                <li>
                    <button className="nav-link theme-toggle-btn-inline" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun className="nav-icon" size={20} /> : <Moon className="nav-icon" size={20} />}
                        <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
                </li>
            </ul>

            <div className="nav-footer">
                <p>&copy; {new Date().getFullYear()} Photo Home. All rights reserved.</p>
            </div>
        </nav>
    );
};

export default Navigation;
