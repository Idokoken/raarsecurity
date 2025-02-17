import React from "react";
import { Link } from "react-router-dom";
import { Tablet, Desktop } from './../Responsive';
import styled from "styled-components";
// import SubscribeForm from "../components/SubscribeForm";
// import Stories from "../components/Stories";


const Wrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  font-family: var(--primary-font);
  
  //  a {
  //   padding: 10px 15px;
  //   background: var(--primary-color);
  //   color: white;
  //   font-size: 20px;
  //   font-weight: 500;
  //   border-radius: 30px;
  //   text-decoration: none;
  // }
  .more a:hover {
    // color: #0a0f83;
    // font-weight: 700;
  }
  .hero {
  position: relative;
  z-index: -2;
  height: 60vh;
  width: 100%;
  background-image: url("/images/home.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  ${Tablet({ height: '85vh' })}
  }
  .hero .hero-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
}
  .hero h1 {
    margin: 20px 0;
    font-weight: 700;
    ${Tablet({ fontSize: '55px', margin: "30px 0" })}
  }
  .hero p{
    font-weight: 500;
    ${Tablet({ fontSize: '20px', width: "725px" })}
  }
  .hero a{
    padding: 10px 15px;
    background: var(--primary-color);
    color: white;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    text-decoration: none;
  }
  

`;


const Home = () => {


  return (
    <Wrapper>
      <div className="hero" id="home">
        <div className='hero-bg'></div>
        <h1>RAAR SECURITY LIMITED</h1>
        <p>
          Total Security Solution
        </p>
        <Link to="/" className="">CONTACT US TODAY</Link>
      </div>


      {/* <section>
        <Stories />
      </section>

      
      <section className="subscribe">
        <SubscribeForm />
      </section> */}

    </Wrapper>
  );
};

export default Home;
