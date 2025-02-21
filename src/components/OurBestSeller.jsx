import React, { useState, useEffect, useRef } from "react";
import "../styles/landingPage.css";

const BestsellersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index
  const carouselTrackRef = useRef(null); // Reference to the carousel track
  const itemsRef = useRef([]); // Reference to carousel items
  const itemWidthRef = useRef(0); // Reference to item width
  const totalItemsRef = useRef(0); // Total items in carousel

  // Set the carousel width and total items after component mount
  useEffect(() => {
    if (itemsRef.current.length > 0) {
      itemWidthRef.current = itemsRef.current[0].offsetWidth; // Get the width of the first item
      totalItemsRef.current = itemsRef.current.length; // Set total items
      const marginRight = 0; // Margin between items
      const totalWidth = (itemWidthRef.current + marginRight) * totalItemsRef.current; // Total width of all items
      carouselTrackRef.current.style.width = `${totalWidth}px`; // Set the width of the carousel track
    }
  }, []);

  // Move carousel based on current index
  const moveCarousel = () => {
    const offset = -(currentIndex * (itemWidthRef.current + 0)); // Calculate the offset
    if (carouselTrackRef.current) {
      carouselTrackRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  const handlePrevClick = () => {
    // Handle previous button click
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return totalItemsRef.current - 2; // Loop back to the last item
      }
    });
  };

  const handleNextClick = () => {
    // Handle next button click
    setCurrentIndex((prevIndex) => {
      if (prevIndex < totalItemsRef.current - 2) {
        return prevIndex + 1;
      } else {
        return 0; // Loop back to the first item
      }
    });
  };

  // Move the carousel whenever the current index changes
  useEffect(() => {
    moveCarousel();
  }, [currentIndex]); // This will trigger whenever currentIndex changes

  return (
    <div className="bestsellers-carousel-section">
      {/* <h2 className="bestsellers-carousel-title">Our Bestsellers</h2> */}

      <div id="bestsellers-carousel" className="bestsellers-carousel">
        <div className="bestsellers-carousel-track" ref={carouselTrackRef}>
          {[
            {
              src: "src/assets/Our Best Sellers/Roman Shades 1 (1).jpeg",
              alt: "Roller Shades",
              caption: "ROLLER SHADES",
            },
            {
              src: "src/assets/Our Best Sellers/6.jpg",
              alt: "Roman Shades",
              caption: "ZEBRA SHADES",
            },
            {
              src: "src/assets/Our Best Sellers/AdobeStock_643179160.jpeg",
              alt: "Solar Shades",
              caption: "CELLULAR SHADES",
            },
            {
              src: "src/assets/Our Best Sellers/Triple Blinds.jpg",
              alt: "Wood Blinds",
              caption: "TRIPPLE SHADES",
            },
            {
              src: "src/assets/Our Best Sellers/Solar Shades 1.jpeg",
              alt: "Drapery",
              caption: "SOLAR SHADES",
            },
            {
              src: "src/assets/Our Best Sellers/Roman Shades 1.jpeg",
              alt: "Woven Wood Shades",
              caption: "ROMAN SHADES",
            },
            {
              src: "src/assets/Our Best Sellers/Vertical Blinds (1).jpeg",
              alt: "Photo Gallery",
              caption: "VERTICAL BLINDS",
            },
            {
              src: "src/assets/Our Best Sellers/Drapery.jpeg",
              alt: "Gallery",
              caption: "DRAPERY",
            },
            {
              src: "src/assets/Our Best Sellers/WhatsApp Image 2025-02-11 at 11.24.36 AM.jpeg",
              alt: "Photo 1",
              caption: "ACCESSORIES",
            },
            {
              src: "src/assets/Our Best Sellers/AdobeStock_706214995.jpeg",
              alt: "Photo 2",
              caption: "CUSTOM CLOSET",
            },
            {
              src: "src/assets/Our Best Sellers/Closet 3.jpeg",
              alt: "Photo 3",
              caption: "DESIGN SERVICES",
            },
          ].map((item, index) => (
            <a key={index} className="bestsellers-carousel-item" ref={(el) => (itemsRef.current[index] = el)}>
              <div className="bestsellers-carousel-img-wrapper">
                <img
                  className="bestsellers-carousel-img"
                  src={item.src}
                  alt={item.alt}
                />
              </div>
              <p className="bestsellers-carouselItem-caption">{item.caption}</p>
            </a>
          ))}
        </div>

        {/* Bestsellers Carousel Navigation */}
        <div className="bestsellers-carousel-nav">
          <button className="bestsellers-carousel-button prev" onClick={handlePrevClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
            >
              <path
                d="M7 13.3384L1 7.33838L7 1.33838"
                stroke="#424242"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <button className="bestsellers-carousel-button next" onClick={handleNextClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
            >
              <path
                d="M1 13.3384L7 7.33838L1 1.33838"
                stroke="#424242"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestsellersCarousel;
