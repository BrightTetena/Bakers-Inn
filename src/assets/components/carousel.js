import React, { useState, useEffect } from 'react';

const Carousel = ({ images,texts,onTextChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    onTextChange(texts[activeIndex]);
  }, [activeIndex, onTextChange]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
        >
          <img src={image.src} alt={image.alt} />
          {!image.overlay && (
            <div className={`overlay ${index === activeIndex ? 'hide' : ''}`}>
              {/* Overlay content */}
            </div>
          )}
          {index === activeIndex && (
            <div className="spinner">
              <span className="tiktok"></span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;




