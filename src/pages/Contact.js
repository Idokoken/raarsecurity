import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Tablet, Desktop } from './../Responsive';


const Wrapper = styled.div`


.contact{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;J
 }
 .contact h2{
     color: rgba(0, 0, 0, 0.5);
     font-weight: 700;
 }
 .contact h5{
     font-size: 16px;
     ${Tablet({ fontSize: '20px' })}
 }
 .contact a{
     padding: 5px 10px;
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
            <section className="contact" id="contact">
                <h2>Contact Us</h2>
                <h5 className="my-2 mx-1">Better yet, see us in person!</h5>
                <p className="my-3">If you have questions about the opportunities available to you in our program, send us a message.
                    We will get back to you as soon as possible.
                </p>
                <h5 className="my-2 mx-1">raarsecurityltd</h5>
                <h5 className="my-2 mx-1">Hours</h5>
                <p>Opens: Monday - Saturday</p>
                <p>09:00am – 10:00pm</p>
                <div className="address">
                    <div className="one">
                        <span className="me-1"><i className="fa-solid icon fa-location-dot"></i></span>
                        <div className="">
                            <h4>Office Address</h4>
                            <p>NO 19 Anu Crescent, Palm Crescent Estate Badore Lagos</p>
                        </div>
                    </div>
                    <div className="one">
                        <span className="me-1"><i className="fa-solid icon fa-phone"></i></span>
                        <div className="">
                            <h4>Our Hotline</h4>
                            <p>+2348062538412</p>

                        </div>
                    </div>
                    <div className="one">
                        <span className="me-1"><i className="fa-solid icon fa-envelope-circle-check"></i></span>
                        <div className="">
                            <h4>Email Address</h4>
                            <p>Info@raarsecurityltd.com</p>
                            <p>Support@raarsecurityltd.com</p>
                        </div>
                    </div>
                </div>
                <Link to='https://forms.gle/Wi9t9hVjmgmtUqmX8' target="_blanck" className="my-2" >Get in Touch</Link>
            </section>
        </Wrapper>
    )
}

export default Contact