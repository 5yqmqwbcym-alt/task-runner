import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <img src="/logo.png" alt="Task Runner Logo" />
        </div>
        <h1 className="hero-title">Task Runner</h1>
        <p className="hero-subtitle">Stay organized. Get things done.</p>
      </div>
      <div className="hero-image">
        <img src="/hero.png" alt="Task Runner Hero" />
      </div>
    </div>
  );
}

export default Hero;
