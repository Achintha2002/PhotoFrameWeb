import React from 'react';
import './Categories.css';

const MOCK_CATEGORIES = [
    { id: 1, name: 'Weddings', image: 'https://picsum.photos/seed/cat1/800/600', count: 42 },
    { id: 2, name: 'Portraits', image: 'https://picsum.photos/seed/cat2/800/600', count: 18 },
    { id: 3, name: 'Landscapes', image: 'https://picsum.photos/seed/cat3/800/600', count: 36 },
    { id: 4, name: 'Street', image: 'https://picsum.photos/seed/cat4/800/600', count: 24 },
    { id: 5, name: 'Architecture', image: 'https://picsum.photos/seed/cat5/800/600', count: 15 },
    { id: 6, name: 'Events', image: 'https://picsum.photos/seed/cat6/800/600', count: 12 }
];

const Categories = () => {
    return (
        <div className="categories-container fade-in">
            <header className="page-header">
                <h1 className="page-title">Portfolio <span className="highlight">Categories</span></h1>
                <p className="page-subtitle">Explore my work through different lenses and perspectives.</p>
            </header>

            <div className="categories-grid">
                {MOCK_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="category-card">
                        <img src={cat.image} alt={cat.name} className="category-image" />
                        <div className="category-content">
                            <h2>{cat.name}</h2>
                            <span className="photo-count">{cat.count} Photos</span>
                            <button className="view-btn">Explore</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
