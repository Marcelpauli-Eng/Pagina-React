import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      title: 'La Torrassa del Moro',
      url: '/multimedia/images/torrassa.jpg',
      fallback: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&q=80'
    },
    {
      id: 2,
      title: 'Dolmen de Llinars',
      url: '/multimedia/images/dolmen.jpg',
      fallback: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80'
    },
    {
      id: 3,
      title: 'Església de Llinars',
      url: '/multimedia/images/iglesia.jpg',
      fallback: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80'
    },
    {
      id: 4,
      title: 'Castellnou de Llinars',
      url: '/multimedia/images/castellnou.jpg',
      fallback: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80'
    },
    {
      id: 5,
      title: 'Auditori',
      url: '/multimedia/images/auditori.jpg',
      fallback: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80'
    },
    {
      id: 6,
      title: 'Muntanyes del Vallès',
      url: '/multimedia/images/muntanyes.jpg',
      fallback: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80'
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-title slide-up">Galeria d'Imatges</h2>
      
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`gallery-item fade-in ${index % 3 === 0 ? 'large' : index % 3 === 1 ? 'tall' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedImage(image)}
          >
            <div className="gallery-image-container">
              <img 
                src={image.url} 
                alt={image.title}
                className="gallery-image"
                onError={(e) => {
                  if (image.fallback) {
                    e.target.src = image.fallback;
                  } else {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="gallery-image-placeholder" style={{display: 'none'}}>
                <div className="placeholder-text">{image.title}</div>
              </div>
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <span className="gallery-title">{image.title}</span>
                  <div className="gallery-view-indicator">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span>Veure</span>
                  </div>
                </div>
              </div>
              <div className="gallery-shine"></div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <button className="image-modal-close" onClick={() => setSelectedImage(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title}
              className="image-modal-image"
              onError={(e) => {
                if (selectedImage.fallback) {
                  e.target.src = selectedImage.fallback;
                } else {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }
              }}
            />
            <div className="gallery-image-placeholder large" style={{display: 'none'}}>
              <div className="placeholder-text">{selectedImage.title}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;

