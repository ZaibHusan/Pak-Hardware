import React, { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const images = [
    "https://prestashop.codezeel.com/PRS23/PRS230555/default/img/cms/main-banner-1.jpg",
    "https://prestashop.codezeel.com/PRS23/PRS230555/default/img/cms/main-banner-2.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval); // ✅ important
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="Hero">
      <div className="Hero_images">
        <img src={images[index]} key={index} alt="banner" />
      </div>
      {/* Arrows */}
      <div className="Hero_slider">
        <button className="Hero_left" onClick={prevSlide}>
          ❮
        </button>
        <button className="Hero_right" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="Hero_buttons">
        {images.map((_, i) => (
          <button
            key={i}
            className={index === i ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* Text */}
      <div key={index} className="Hero-text">
        <p>All The Parts You Need</p>
        <h1><span>Ingco ID6808</span> <span>Impact Drill</span></h1>
        <button>Shop Now</button>
      </div>

    </div>
  );
}
