import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-title">Welcome to Our Beautiful City</h2>
        <p className="hero-subtitle">
          Discover amazing attractions, rich culture, and unforgettable experiences
        </p>
      </div>
      <div className="hero-video">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="hero-video-element"
        >
          <source src="/multimedia/video/city-tour.mp4" type="video/mp4" />
          <source src="/multimedia/video/city-tour.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;

