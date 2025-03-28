import React, { useState, useEffect } from 'react'
import { Tablet } from './../Responsive';
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import Image1 from "./items/image1.jpg"
import Image2 from "./items/image2.jpg"
import Image3 from "./items/image3.jpg"



const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;


 .slider-container {
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.slider {
  width: 100vw;
  height: 50vh;
  overflow: hidden;
  position: relative;
   ${Tablet({ height: '70vh' })}
   
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0; /* Hidden by default */
  transition: opacity 2s ease-in-out, transform 5s ease-in-out;
  position: absolute;
  
}
.slide-image.active {
  opacity: 1; /* Only the active image is visible */
  transform: scale(1);
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  width: 100%;
  text-align: center;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1; 
  ${Tablet({ transform: "translate(-40%, -50%)" })}
   
}


  h1 {
    margin: 20px 0;
    font-weight: 700;
    text-align: left;
    ${Tablet({ fontSize: '55px', margin: "30px 0" })}
  }
  p{
    font-weight: 500;
    text-align: left;
    ${Tablet({ fontSize: '20px' })}
  }
   a{
    padding: 10px 15px;
    background: var(--primary-color);
    color: white;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    text-decoration: none;
    margin-top: 20px;   
    max-width: 250px;
    text-align: left;
  }
 .hero-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7 );
    z-index: 1;
}
  .content{
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

`

function ImageSlider() {
  const images = [Image1, Image2, Image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Wrapper>

      <div className="slider-container">
        <div className="slider">

          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`slide-image ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
          <div className="hero-bg"></div>
          <div className="overlay-text">

            <div className='content'>
              <h1>RAAR SECURITY LIMITED</h1>
              <p className='pb-3'>
                Offering Total Security Solution
              </p>
              <Link to="#contact" className="">CONTACT US TODAY</Link>
            </div>

          </div>
        </div>
      </div>

    </Wrapper>
  )
}

export default ImageSlider