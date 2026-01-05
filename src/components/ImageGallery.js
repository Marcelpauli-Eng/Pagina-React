import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      title: 'City Skyline - Edited',
      description: 'Enhanced with color correction, HDR effects, and text overlay',
      url: '/multimedia/images/city-skyline-edited.jpg',
      edits: ['Color Correction', 'HDR Enhancement', 'Text Overlay', 'Vignette Effect']
    },
    {
      id: 2,
      title: 'Historic District',
      description: 'Composited image with enhanced lighting and filters',
      url: '/multimedia/images/historic-district.jpg',
      edits: ['Compositing', 'Lighting Enhancement', 'Vintage Filter']
    },
    {
      id: 3,
      title: 'Cityscape Panorama',
      description: 'Stitched panorama with color grading',
      url: '/multimedia/images/cityscape-panorama.jpg',
      edits: ['Panorama Stitching', 'Color Grading', 'Sky Replacement']
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-title">Image Gallery</h2>
      <p className="section-subtitle">
        Professionally edited images showcasing the beauty of our city
      </p>
      
      <div className="gallery-grid">
        {images.map(image => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => setSelectedImage(image)}
          >
            <div className="gallery-image-container">
              <div className="gallery-image-placeholder">
                <div className="placeholder-icon">📸</div>
                <div className="placeholder-text">Image: {image.title}</div>
                <div className="edited-badge">EDITED</div>
              </div>
            </div>
            <div className="gallery-item-info">
              <h3 className="gallery-item-title">{image.title}</h3>
              <p className="gallery-item-description">{image.description}</p>
              <div className="gallery-edits">
                {image.edits.map((edit, index) => (
                  <span key={index} className="edit-tag">{edit}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <div className="image-modal-image-container">
              <div className="gallery-image-placeholder large">
                <div className="placeholder-icon">📸</div>
                <div className="placeholder-text">{selectedImage.title}</div>
              </div>
            </div>
            <div className="image-modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <div className="image-modal-edits">
                <h4>Editing Techniques Applied:</h4>
                <ul>
                  {selectedImage.edits.map((edit, index) => (
                    <li key={index}>{edit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;

