import React, { useState } from "react";
import '../styles/Carousel.css'; 

const Carousel = () => {
  const images = [
    {
      src: "https://deconveniencia.com/wp-content/uploads/2023/11/DeConveniencia_Salto_Angeles1.jpg",
      title: "El salto de los ángeles",
      description:
        "Antonio es un niño de 12 años que crece bajo la protección de una familia humilde y amorosa.",
    },
    {
      src: "https://naturaleza360.com/wp-content/uploads/2024/01/naturaleza-animales-y-plantas-1024x585.jpg",
      title: "Explora la naturaleza",
      description: "Descubre los rincones más hermosos del planeta.",
    },
    {
      src: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_768,h_534/https://www.intiraymiexpediciones.com/wp-content/uploads/2023/06/20230528-DJI_0123-768x534.jpg",
      title: "Aventuras inolvidables",
      description: "Vive experiencias únicas con nosotros.",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={prevImage}>
        &#x276E;
      </button>
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${images[currentImage].src})` }}
      >
        <div className="carousel-overlay">
          <h1>{images[currentImage].title}</h1>
          <p>{images[currentImage].description}</p>
          <button className="btn btn-pink">
            Comprar
          </button>
        </div>
      </div>
      <button className="carousel-btn next" onClick={nextImage}>
        &#x276F;
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImage ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;