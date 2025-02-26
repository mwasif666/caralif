import React, { useEffect, useState } from "react";

const CarScroll = () => {
  const [lightsOn, setLightsOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const carSection = document.getElementById("carSection");
      const sectionPosition = carSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // If the section is visible on scroll
      if (sectionPosition < windowHeight / 1.5) {
        setLightsOn(true);
      } else {
        setLightsOn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="pxl-banner-inner" id="carSection">
        {/* Car image with lights off */}
        <img
          decoding="async"
          width="1920"
          height="593"
          src="https://demo.bravisthemes.com/ducatibox/wp-content/uploads/2024/01/car-banner.png"
          alt="Car without lights"
          className="car-image"
        />

        {/* Car image with lights on */}
        <div className={`box-image-hover ${lightsOn ? "lights-on" : ""}`}>
          <img
            decoding="async"
            width="1920"
            height="593"
            src="https://demo.bravisthemes.com/ducatibox/wp-content/uploads/2024/01/car-banner-light.png"
            alt="Car with lights on"
          />
        </div>
      </div>
      <style jsx>{`
        .pxl-banner-inner {
          position: relative;
          width: 100%;
          max-width: 1920px;
          margin: auto;
        }

        .pxl-banner-inner img {
          width: 100%;
          display: block;
        }

        .box-image-hover {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          pointer-events: none;
        }

        .lights-on {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default CarScroll;
