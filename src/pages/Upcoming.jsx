import React from 'react';
import './Upcoming.css';
import keyTagsImage from '../assets/key-tags.png'; // <--- imported image
import tShirtsImage from '../assets/t-shirts.png';
import printedMugsImage from '../assets/printed-mugs.png';

const upcomingProjects = [
    { id: 1, title: 'Customize Key Tags', date: 'Fall 2026', image: keyTagsImage },
    { id: 2, title: 'Printed T-shirts', date: 'Winter 2026', image: tShirtsImage },
    { id: 3, title: 'Customize printed Mugs', date: 'Spring 2027', image: printedMugsImage }
];

const Upcoming = () => {
    return (
        <div className="upcoming-container fade-in">
            <header className="page-header">
                <h1 className="page-title">On The <span className="highlight">Horizon</span></h1>
                <p className="page-subtitle">A sneak peek into exclusive projects currently in production.</p>
            </header>

            <div className="upcoming-list">
                {upcomingProjects.map((project) => (
                    <div key={project.id} className="upcoming-item">
                        <div className="upcoming-image-container">
                            <img src={project.image} alt="Coming Soon" className="blurred-image" />
                            <div className="coming-soon-badge">
                                <span>Coming Soon</span>
                            </div>
                        </div>
                        <div className="upcoming-info">
                            <h2>{project.title}</h2>

                            <button className="notify-btn">Notify Me</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Upcoming;
