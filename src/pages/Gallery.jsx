import React from 'react';
import './Gallery.css';

const MOCK_GALLERY = [
    { id: 1, url: 'https://picsum.photos/seed/gal1/800/1200', title: 'Whispers of Dawn', cat: 'Landscape' },
    { id: 2, url: 'https://picsum.photos/seed/gal2/800/800', title: 'Urban Symmetry', cat: 'Street' },
    { id: 3, url: 'https://picsum.photos/seed/gal3/1200/800', title: 'Golden Hour', cat: 'Wedding' },
    { id: 4, url: 'https://picsum.photos/seed/gal4/800/1000', title: 'Neon Nights', cat: 'Portrait' },
    { id: 5, url: 'https://picsum.photos/seed/gal5/1000/800', title: 'Silent Forest', cat: 'Nature' },
    { id: 6, url: 'https://picsum.photos/seed/gal6/800/1200', title: 'Metropolis', cat: 'Architecture' },
    { id: 7, url: 'https://picsum.photos/seed/gal7/1200/900', title: 'Ocean Breeze', cat: 'Landscape' },
    { id: 8, url: 'https://picsum.photos/seed/gal8/900/1200', title: 'Street Soul', cat: 'Street' }
];

const Gallery = () => {
    return (
        <div className="gallery-container fade-in">
            <header className="page-header">
                <h1 className="page-title">Full <span className="highlight">Gallery</span></h1>
                <p className="page-subtitle">A curated collection of my favorite photo framing</p>
            </header>

            <div className="gallery-grid">
                {MOCK_GALLERY.map((photo) => (
                    <div key={photo.id} className="gallery-item">
                        <img src={photo.url} alt={photo.title} loading="lazy" />
                        <div className="gallery-overlay">
                            <h3>{photo.title}</h3>
                            <p>{photo.cat}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
