import { BrowserRouter as Router } from 'react-router-dom'
import '../App.css';
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InfoContainer from '../components/InfoContainer';
import InfoItem from '../components/InfoItem';
import Image from '../assets/Asset1.svg'
import SmallContact from '../components/SmallContact';
import BlogPost from '../components/Blogpost';
const Blog = (props) => {
    const navigate = useNavigate()
    return (
        <Fragment>
            <Navbar />
            <Container fluid className='bg-dark text-white h-auto'>
                <div className='h-auto'>
                    <Row>
                        <Col className='d-block mt-5 text-center h-auto'>
                            <h1 className=' fw-bold'>Our Blog</h1>
                            <h4 className='pt-2 w-50 mx-auto'>We offer a full range of NFT services, from custom development to website design, content creation, and legal and web3 consultation.</h4>
                        </Col>
                    </Row>
                    <Row className='w-75 mt-5 mx-auto'>
                        <Col className='d-block text-center p-5 h30rem'>
                            <h3 className='pt-5 fw-bold '>We turn your NFT dreams
                                into reality.</h3>
                            
                        </Col>
                        <Col className='d-block text-center h30rem InfoContainerColor rounded p-5 shadow'>
                        <h3 className='pt-5 fw-bold '>We turn your NFT dreams
                                into reality.</h3>
                            <h5 className='pt-2 opacity5'>We offer a full range of NFT services,
                                from custom development to website
                                design, content creation, and legal and
                                web3 consultation.</h5>
                        </Col>
                    </Row>
                </div>

                <Row className='mt-4'>
                <h3 className='mx-auto fw-bold '>Latest Articles</h3>
                    <Col>
                        <BlogPost/>
                        <BlogPost/>
                    </Col>
                    <Col>
                    <BlogPost/>
                    <BlogPost/>
                    </Col>

                </Row>

                
            </Container>
        </Fragment>

    );
}

export default Blog;
