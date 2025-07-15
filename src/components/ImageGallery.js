import React from "react";
import Images from "src";

const ImageGallery = () => {
  return (
    <section className="gallery">
      <h3>Our Artisans in Action</h3>
      <div className="images">
        <img src="src/images/a.webp" alt="Artisan 1" />
        <img src="src/images/c.webp" alt="Artisan 2" />
        <img src="src/images/d.webp" alt="Artisan 3" />
        <img src="src/images/e.webp" alt="Artisan 4" />
        <img src="src/images/b.jpg" alt="Artisan 5" />
      </div>
    </section>
  );
};

export default ImageGallery;
