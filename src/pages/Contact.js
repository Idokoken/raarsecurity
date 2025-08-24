import React from 'react'
import styled from 'styled-components'
// import { Link } from "react-router-dom";
import { Tablet } from './../Responsive';


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
.contact-hero h1{
    font-weight: 700;
    margin: 10px 20px;
    color: var(--primary-color);
    text-align: center;
    font-size: 40px;
}


.contact{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
 }
 .contact h2{
     color: rgba(0, 0, 0, 0.5);
     font-weight: 700;
 }
 .contact h5{
     font-size: 16px;
     ${Tablet({ fontSize: '20px' })}
 }
 .contact h6{
     padding: 10px 10px;
     background: var(--primary-color);
     color: white;
     font-size: 20px;
     font-weight: 500;
     border-radius: 5px;
     text-decoration: none;
 }
 .contact .address{
     width: 100%;
     display: grid;
     grid-template-columns: 100%;
     background: rgba(53, 8, 112, 0.2);;
     grid-gap: 10px;
     border-radius: 20px;
     ${Tablet({
    display: 'grid', gridTemplateColumns: '45% 45%', padding: '30px', borderRadius: '30px'
})}
 }
 .contact .address .one{
     display: flex;
     align-items: center;
     margin: 5px;
 }
 .contact .address .one div{
     word-break: break-all;
     margin-left: 10px;
     margin-right: 5px;
 
 }
 .contact .address .one p{
     margin: 8px 0;
     font-size: 14px;
     ${Tablet({ margin: '10px 0', fontSize: '16px' })}
     
 }
 .contact .address .one span{
   flex-shrink: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   color: var(--primary-color);
   background: white;
   width: 40px;
   height: 40px;
   border-radius: 50%;
 }
`

function Contact() {
    return (
        <Wrapper>
            <section className="contact-hero">
                <div className='hero-bg'></div>
                <h1>Contact Us</h1>
            </section>
            <section className="contact" id="contact">

                <h5 className="my-2 mx-1">Do want to see us in person!</h5>
                <p className="my-3">
                    Reach out to us for reliable security solutions. Whether you need 24/7 surveillance, on-site
                    guards, or customized protection services, our team is here to help. Contact us today for a
                    consultation
                </p>

                <h5 className="my-2 mx-1">Office Hours</h5>
                <p>Opens: Monday - Friday</p>
                <p>08:30am – 5:00pm</p>
                <div className="address">
                    <div className="one">
                        <span className="me-1"><i className="fa-solid icon fa-location-dot"></i></span>
                        <div className="">
                            <h4>Office Address</h4>
                            <p>NO 30 Howeidy street D'Rock Plaza kado Estate Abuja, Nigeria</p>
                        </div>
                    </div>
                    <div className="one">
                        <span className="me-1"><i className="fa-solid icon fa-phone"></i></span>
                        <div className="">
                            <h4>Our Hotline</h4>
                            <p>+234815403965</p>

                        </div>
                    </div>
                    <div className="one">
                        <span className="me-1"><i className="fa-solid icon fa-envelope-circle-check"></i></span>
                        <div className="">
                            <h4>Email Address</h4>
                            <p>Info@raarsecurityltd.com</p>
                            <p>hello@raarsecurityltd.com</p>
                        </div>
                    </div>
                </div>
                <h6 className="my-2" >Get in Touch</h6>
            </section>
        </Wrapper>
    )
}

export default Contact