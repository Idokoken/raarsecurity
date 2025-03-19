import React from 'react'
// import { Link } from "react-router-dom";
// import { Tablet, Desktop } from './../Responsive';
import styled from "styled-components";

const Wrapper = styled.div`
padding: 0;
  margin: 0;
  font-family: var(--primary-font);
  min-height: 50vh; 

  .hero {
    height: 20vh;
    background-image: url("/images/bg-hero.jpg");
    background-size: cover;
    position: relative;
    z-index: -2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
    .hero .hero-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, rgba(171, 188, 45, 0) 28.61%, rgba(171, 188, 45, 0.9) 53.09%);
    z-index: -1;
}
.hero h1{
    font-weight: 700;
}


`

function Gallery() {
    return (
        <Wrapper>
            <section class="hero">
                <div class='hero-bg'></div>
                <h1>About Us</h1>
            </section>Gallery</Wrapper>
    )
}

export default Gallery