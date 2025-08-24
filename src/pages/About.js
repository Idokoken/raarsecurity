import React from 'react'
// import { Tablet, Desktop } from './../Responsive';
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  font-family: var(--primary-font);

//   .hero {
//     height: 20vh;
//     background-image: url("/images/bg-hero.jpg");
//     background-size: cover;
//     position: relative;
//     z-index: -2;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: white;
// }
//     .hero .hero-bg{
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(270deg, rgba(171, 188, 45, 0) 28.61%, rgba(171, 188, 45, 0.9) 53.09%);
//     z-index: -1;
// }
.about-hero h1{
    font-weight: 700;
    margin: 10px 20px;
    color: var(--primary-color);
    text-align: center;
    font-size: 40px;
}
    
  .content{
  	
    margin: 20px auto;

  }
  .content h3{
  	text-align: center;
  	font-weight: 700;
  }
   .content .img-container{
  	 width: 100px;
  	 height: 100px;
  	 margin: 30px auto 15px;   	 
  }
   .content .img-container img{
  	  width: 100%;
  	  height: 100%;
  }

  

`



function About() {
    return (
        <Wrapper>
            <section className="about-hero">
                <div className='hero-bg'></div>
                <h1>About Us</h1>
            </section>

            <div className="container content p-3">
                <div className="img-container">
                    <img src="/images/vision.png" alt="vision" />
                </div>
                <h3>Vision</h3>
                <p>
                    Rendering total security solutions to our esteemed clients and maintaining the highest standard
                    of security professionalism.
                </p>
                <div className="img-container">
                    <img src="/images/mission.png" alt="mission" />
                </div>
                <h3>Mission</h3>
                <p>
                    At RAAR Security ltd, we are commited to providing exceptional security services by delivering
                    personalized high quality and cost-efficient solutions to meet the needs of our clients.
                </p>
                <p>

                </p>
                <div className="img-container">
                    <img src="/images/story.png" alt="story" />
                </div>
                <h3>Our Story</h3>
                <p>
                    <strong>RAAR Security is a Category A security service</strong>  facilitation and
                    consulting company, registered under the Corporate Affairs comission in Nigeria,
                    with RC Number 1520254.
                </p>
                <p>
                    Raar Security Limited is established with the purpose of providing professional security services
                    , which include; security guards, bodyguards, and national-level guarding services. These guarding
                    services encompass a variety of areas, such as event security, allied services, industrial security
                    services, personal security services, cash escort services, electronic and security surveillance,
                    manned guarding, and detective services. Additionally, the company specializes in installing electronic
                    security systems, such as automated gates, access control systems, infra-red motion detection, and
                    alarms. We also offer general supply services and a wide range of security training programs for
                    both the private and public sectors throuhout Nigeria.
                </p>

            </div></Wrapper>
    )
}

export default About