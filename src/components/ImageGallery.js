import React, { useEffect, useState } from "react";
import "./ImageGallery.css";

// Dynamically import all images from a folder
const importAll = (r) => r.keys().map(r);

// Load all .webp images from the folder
const images = importAll(
  require.context("./images", false, /\.(webp|jpg|jpeg|png)$/)
);

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-slideshow">
      {images.map((img, index) => (
        <div
          key={index}
          className={`bg-slide ${index === currentImageIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
