import React, { useState } from "react";
import "./Carousel.css";

// Import your local images (or use URLs)
import pic1 from '../../lib/images/BOTB_Clean.jpg';
import pic2 from "../../lib/images/borderless2.jpg";
import pic3 from "../../lib/images/fiff.jpg";

const images = [pic1, pic2, pic3];

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="carousel-container">
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className="carousel-image"
      />
        <p className="quote"><i>"For the community, by the community." - Luis Miguel</i></p>
      <button className="carousel-btn prev" onClick={prev}>
        ◀
      </button>
      <button className="carousel-btn next" onClick={next}>
        ▶
      </button>
    
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;