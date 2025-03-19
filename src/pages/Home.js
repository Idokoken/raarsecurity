import React from "react";
import { Tablet } from './../Responsive';
import styled from "styled-components"
import ImageSlider from "../components/ImageSlider";
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

  .img-container{
     width: 90px;
     height: 90px;
     border: 2px solid var(--primary-color);
     border-radius: 50%;
     padding: 4px;
     ${Tablet({ width: "200px", height: "200px" })}
  }
   .img-container img{
     width: 100%;
     height: 100%;
     border-radius: 50%;
  }
 .service{
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     padding: 10px;
 }
 .all{
      display: flex;
     justify-content: center;
     align-items: center;
     flex-wrap: wrap;
     padding: 10px;
 }

   .client-image{
     width: 70px;
     height: 70px;
     padding: 3px;
     margin: 10px;
     ${Tablet({ width: "130px", height: "130px" })}
  }
   .client-image img{
     width: 100%;
     height: 100%;
     object-fit: contain;
  }
  h2{
    text-align: center;
    font-weight: 700;
    color: var(--primary-color);
    font-size: 40px;
    margin: 30px 5px 20px;
 }

`;


const Home = () => {


  return (
    <Wrapper>
      <section>
        <ImageSlider />
      </section>

      <section className="services container my-3">
        <h2>Our Services</h2>
        <p>our company provides a vast selection of secure and approved equipment to aid in various security
          operations. Leveraging our diverse network of suppliers, we strive to strike a balance between
          pricing, quality, and timely service delivery. Our primary objective is to deliver top-tier
          security services to clients across the public and private sectors which include but not limited to
          the following:
        </p>
        <ul>
          <li>Close protection services</li>
          <li>Supply of wide range of other security services</li>
          <li>Tracking devices and surveillance</li>
          <li>Executive escort services</li>
          <li>Supply of secured vehicles/ mobile hospitals</li>
          <li>Supply of body Armoor such as bulletproof vest, gas mask etc</li>
          <li>Security Training and consultancy</li>
        </ul>
        <p>
          We offer an extensive range of services to various entities, including but not limited to business,
          non-profit organisations, eductional institutions, and government agencies such as:
        </p>

      </section>

      <section className="all">
        <div className="service">
          <div className="img-container">
            <img className="" alt="service" src="/images/school.jpg" />
          </div>
          <h5>Schools</h5>
        </div>

        <div className="service">
          <div className="img-container">
            <img className="" alt="service" src="/images/hotels.jpg" />
          </div>
          <h5>Hotels</h5>
        </div>

        <div className="service">
          <div className="img-container">
            <img className="" alt="service" src="/images/estate.jpg" />
          </div>
          <h5>Estate</h5>
        </div>

        <div className="service">
          <div className="img-container">
            <img className="" alt="service" src="/images/hospital.jpg" />
          </div>
          <h5>Hospitals</h5>
        </div>

        <div className="service">
          <div className="img-container">
            <img className="" alt="service" src="/images/plaza.jpg" />
          </div>
          <h5>Plaza</h5>
        </div>

        <div className="service">
          <div className="img-container">
            <img className="" alt="service" src="/images/lounge.jpg" />
          </div>
          <h5>Lounge</h5>
        </div>

      </section>


      <section className="clients container">
        <h2>Our Clientele</h2>
        <p>At RAAR security limited, we handle client's requests with dexterity, we are dedicated to
          providing exceptional and personalized high-quality service that surpass clients requirements
          because our client satisfaction is our utmost priority.
        </p>
        <p>
          Throughout our years of operation, we have provided security services to numerous high-profile
          individuals, organisations, schools, private and corporate entities, and government agencies.
          Some of our notable clients with permission to mention here include:
        </p>
      </section>
      <section className="all">
        <div className="client-image">
          <img className="" alt="client-logo" src="/images/clients/obudu.png" />
        </div>

        <div className="client-image">
          <img className="" alt="client-logo" src="/images/clients/inec.png" />
        </div>

        <div className="client-image">
          <img className="" alt="client-logo" src="/images/clients/golden-spring.png" />
        </div>
        <div className="client-image">
          <img className="" alt="client-logo" src="/images/clients/alpha-lounge.jpeg" />
        </div>
        <div className="client-image">
          <img className="" alt="client-logo" src="/images/clients/kokkies.png" />
        </div>
        <div className="client-image">
          <img className="" alt="client-logo" src="/images/clients/adamawa_state.png" />
        </div>
        <div className="client-image">
          <img className="" alt="client-logo" src="/images/clients/salem.jpg" />
        </div>
        <div className="client-image">
          <img className="" alt="client-logo" src="/images/clients/nigerian-air.png" />
        </div>
      </section>



    </Wrapper>
  );
};

export default Home;
