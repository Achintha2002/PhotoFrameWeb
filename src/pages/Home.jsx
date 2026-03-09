import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Placeholder mock data inspired by a premium photography portfolio
const featuredPhotos = [
    { id: 1, url: 'https://picsum.photos/seed/home1/800/1200', title: 'Urban Symmetry', cat: 'Street' },
    { id: 2, url: 'https://picsum.photos/seed/home2/800/1000', title: 'Neon Lights', cat: 'Portrait' },
    { id: 3, url: 'https://picsum.photos/seed/home3/800/1200', title: 'Mountain Echoes', cat: 'Landscape' },
    { id: 4, url: 'https://picsum.photos/seed/home4/1000/800', title: 'Golden Hour', cat: 'Wedding' },
    { id: 5, url: 'https://picsum.photos/seed/home5/800/800', title: 'Silent Forest', cat: 'Nature' },
    { id: 6, url: 'https://picsum.photos/seed/home6/1000/1000', title: 'Metropolis', cat: 'Architecture' }
];

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container fade-in">
            <header className="hero-section">
                <h1 className="hero-title">Capturing <span className="highlight">Moments</span>,<br /> Creating <span className="highlight">Eternity</span>.</h1>
                <p className="hero-subtitle">Preserve Your Memories</p>
                <button className="cta-button" onClick={() => navigate('/gallery')}>View Gallery</button>
            </header>

            <section className="gallery-section">
                <h2 className="section-heading">Featured Works</h2>
                <div className="masonry-grid">
                    {featuredPhotos.map((photo) => (
                        <div key={photo.id} className="masonry-item">
                            <img src={photo.url} alt={photo.title} loading="lazy" />
                            <div className="photo-overlay">
                                <h3>{photo.title}</h3>
                                <p>{photo.cat}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
