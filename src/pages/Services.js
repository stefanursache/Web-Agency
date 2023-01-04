import { BrowserRouter as Router } from 'react-router-dom'
import '../App.css';
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InfoContainer from '../components/InfoContainer';
import InfoItem from '../components/InfoItem';
import Image from '../assets/SVG/Asset2.svg'
import SmallContact from '../components/SmallContact';
import {motion} from "framer-motion";
const Services = (props) => {
    const navigate = useNavigate()
    
    return (
        <Fragment>
            
            <div fluid className='BackColor2 text-white w-100 h-auto'>
                <div className='mb-5 w-100 h-auto'>
                    
                    <Navbar />
                
                    <Row className='w-75 mt-5 mx-auto rblock'>
                        <Col className='verticalAlign'>
                            <h3 className='pt-5 fw-bold align-self-center'>Our mission</h3>
                            <h4 className='pt-5 fw-bold align-self-center grey'>With our combined experience, we were able to spot the weak points of roadmaps and blueprints of our clients and give them an honest and sometimes reality checking opinion.</h4>
                            <h4 className='pt-5 fw-bold align-self-center grey'>As we started getting closer, we all realized that we share the same passion and work ethic in making Web3 projects and taking our client’s ideas to a refined product.</h4>
                        </Col>
                        <Col className='d-flex mt-5 justify-content-center'>
                            <img className="BigImage rounder " src={Image} alt="Italian Trulli" />
                        </Col>
                    </Row>
                    <Row className='w-75 mt-5 mx-auto  d-block '>
                        <h3 className='pt-5 fw-bold align-self-center'>Our Story</h3>   
                        <h3 className='pt-5  fw-bold  grey'>We are a team of 4 friends who started working in the Web3 space as freelancers more than a year ago.  </h3>
                        <h3 className='pt-5  fw-bold  grey'>With our combined experience, we were able to spot the weak points of roadmaps and blueprints of our clients and give them an honest and sometimes reality checking opinion.</h3>
                        <h3 className='pt-5  fw-bold  grey'>As we started getting closer, we all realized that we share the same passion and work ethic in making Web3 projects and taking our client’s ideas to a refined product.</h3>
                    </Row>
                </div>
            </div>
        </Fragment>

    );
}

export default Services;
