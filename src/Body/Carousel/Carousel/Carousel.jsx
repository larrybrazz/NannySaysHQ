import React, { useEffect, useRef, useState } from "react";
import { imagesData } from "./imagesData";
import "./Carousel.scss";

const Carousel = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === imagesData.length - 1) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);

    updateTextClasses(); // Trigger animation when state changes
    return () => clearTimeout(timer);
  }, [currentState]);

  const descriptionRef = useRef(null);

  const updateTextClasses = () => {
    if (descriptionRef.current) {
      const textElements = descriptionRef.current.querySelectorAll(
        ".description-container h1, .description-container p, .description-container .text-btn"
      );

      textElements.forEach((element, index) => {
        if ( currentState === 0) {
          element.classList.add("active");

          // Remove the 'active' class after 3 seconds
          setTimeout(() => {
            element.classList.remove("active");
          }, 3000);
        }
      })
      textElements.forEach((element, index) => {
        if ( currentState) {
          element.classList.add("active");

          // Remove the 'active' class after 3 seconds
          setTimeout(() => {
            element.classList.remove("active");
          }, 3000);
        }
      })

    }
  };

  const bgImage = {
    backgroundImage: `url(${imagesData[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
  };

  const nextImage = (index) => {
    setCurrentState(index);
  };

  return (
    <div className="carousel">
      <div style={bgImage} className="carousel-slider flex flex-col">
        <div
          ref={descriptionRef}
          className="description-container space-y-6  h-[100vh]"
        >
          <div className="text-center space-y-28">
            <h1 className="text-up capitalize">{imagesData[currentState].title}</h1>
            <p className="text-right capitalize">{imagesData[currentState].body}</p>
            <button className=" text-btn capitalize">Contact Us</button>
          </div>
         
        </div>
        <div className="carousel-boulit">
          {imagesData.map((imageSlider, index) => (
            <span
              key={index}
              onClick={() => setCurrentState(index)}
              className={index === currentState ? "active" : ""}
            >
              {" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
