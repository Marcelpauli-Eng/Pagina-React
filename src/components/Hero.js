import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && videoRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        videoRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-decorative-elements">
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        <div className="hero-orb orb-3"></div>
        <div className="hero-grid-pattern"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">Vallès Oriental</div>
        <h2 className="hero-title">
          <span className="title-line">Descobreix</span>
          <span className="title-line highlight">Llinars del Vallès</span>
        </h2>
        <p className="hero-subtitle">
          Un poble amb <span className="highlight-text">història</span>, <span className="highlight-text">natura</span> i <span className="highlight-text">tradició</span> al cor del Vallès Oriental
        </p>
        <div className="hero-buttons">
          <a href="#activities" className="hero-cta primary">
            <span>Descobreix les Activitats</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#gallery" className="hero-cta secondary">Veure Galeria</a>
        </div>
      </div>
      <div className="hero-video">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="hero-video-element"
        >
          <source src="/multimedia/video/llinars-tour.mp4" type="video/mp4" />
          <source src="/multimedia/video/llinars-tour.webm" type="video/webm" />
          El teu navegador no suporta el tag de vídeo.
        </video>
        <div 
          className="hero-background-image"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80)'
          }}
        ></div>
        <div className="hero-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;

