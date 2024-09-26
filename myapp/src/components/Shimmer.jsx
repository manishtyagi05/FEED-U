import React from 'react';
import './Shimmer.css';

const Shimmer = () => {
    const shimmerCards = [];

    for (let i = 0; i < 20; i++) {
        shimmerCards.push(
            <div key={i} className="shimmer-card">
                <div className="shimmer-image"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
            </div>
        );
    }

    return <div className="shimmer-container">{shimmerCards}</div>;
};

export default Shimmer;
