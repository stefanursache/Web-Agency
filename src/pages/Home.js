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
import Image from '../assets/SVG/Asset2.svg'
import SmallContact from '../components/SmallContact';
import discord from '../assets/discord.png';
import security from '../assets/cyber-security.png';
import operator from '../assets/operator.png';
import social from '../assets/bullhorn.png';
import influencer from '../assets/network.png';
import email from '../assets/email.png';
import website from '../assets/website.png';
import smartContracts from '../assets/smart-contracts.png';
import collection from '../assets/collection.png';
import graph1 from '../assets/graph1.png';
import graph2 from '../assets/graph2.png';
import graph3 from '../assets/graph3.png';
import company1 from '../assets/c1.png';
import company2 from '../assets/c2.png';
import company3 from '../assets/c3.png';
import company4 from '../assets/c4.png';
import { motion } from "framer-motion";
import Service from '../components/Service.js';
import IncreasingNumber from '../components/IncreasingNumber';
import CalendlyWidget from '../components/CalendlyWidget';
import { InlineWidget } from "react-calendly";

const Home = (props) => {
    const navigate = useNavigate()
    return (
        <Fragment>

            <div className='BackColor2  text-white h-auto w-100 no-padding'>
                <div className='backImage2 row w100 h100 no-gutter' id='home'>
                    <Navbar />
                    <Col className='d-block text-center w-100 col1'>
                        <p className='pt-5 fs70 '>Web 3 solutions </p>
                        <p className='pt-2 fs70 '>for a brighter business future</p>
                        <p className='pt-2 grey ml'>From validation to production, we provide the all-in-one solution you need to transform your idea into reality, fit to the market and delightful to your community.</p>


                    </Col>

                </div>



                <Row className='w-100 h-auto row no-gutter' id="wegetyou">

                    <div className='d-block h-auto mx-auto text-center px-5 w50 noscroll ml'>
                        <motion.p
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .5, delay: 0 }} className='pt-5 fs2 '>We get you !</motion.p >
                        <motion.p
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .9, delay: 0 }} className='pt-2 fs-4 grey'>Every entrepreneur has that inner urge to innovate, to bring their contribution to the world, and you make no exception.</motion.p >
                        <motion.p
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0 }} className='pt-2 fs-4 grey'>Finding the right talent for pursuing your idea can be rather problematic though, and it may take too much time. It can take months until you have your team assembled, while you're bleeding money.</motion.p >
                        <motion.p
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.4, delay: 0 }} className='pt-2 fs-4 grey'>We know your struggles, it’s hard to build a team that would take care of your Web3 project, especially if you dream big and have a long term vision. Here is where we come into play and we are ready to share with you our strategies and code implementation.</motion.p >
                        <Button href='/services' variant="" size="lg" className='greyborder fs-5 px-5 text-center whoweare grey'><span className='mt-1'>Who are we?</span> </Button>

                    </div>

                </Row>
                <div className='h-auto  py mt-4'>

                    <Row className='px5 mt-5 rblock row no-gutter'>

                        <Col className='d-flex justify-content-center '>
                            <div className='mx-2 w25 h-100 d-block'>
                                <div className='text-center pt-4 rounder w-100 hv1'>
                                    {/* <img className="BigImage rounder align-self-center align-self-center" src={Image} alt="Italian Trulli" /> */}
                                    <IncreasingNumber intervalTime={50} lastNumber={96} afterText={"%"}></IncreasingNumber>
                                    <p>Happy Clients</p>
                                </div>
                                <div className=' text-center pt-4 rounder mt-2 w-100 hv1'>
                                    {/* <img className="BigImage rounder align-self-center align-self-center" src={Image} alt="Italian Trulli" /> */}
                                    <IncreasingNumber intervalTime={150} lastNumber={3} afterText={"years"}></IncreasingNumber>
                                    <p>in web3 business</p>
                                </div>
                            </div>
                            <div className='mx-2 w25 h-100 d-block'>
                                <div className='text-center pt-4 rounder w-100 hv1'>
                                    {/* <img className="BigImage rounder align-self-center align-self-center" src={Image} alt="Italian Trulli" /> */}
                                    <IncreasingNumber intervalTime={100} lastNumber={1} afterText={"M+"}></IncreasingNumber>
                                    <p>People in our communities</p>
                                </div>
                                <div className=' text-center pt-4 rounder mt-2 w-100 hv1'>
                                    {/* <img className="BigImage rounder align-self-center align-self-center" src={Image} alt="Italian Trulli" /> */}
                                    <IncreasingNumber intervalTime={100} lastNumber={50} afterText={"+"}></IncreasingNumber>
                                    <p>Finished projects</p>
                                </div>
                            </div>

                            {/* <div className='rounder mx-2 w-50 hv2'>
                                <img className="BigImage rounder align-self-center align-self-center" src={Image} alt="Italian Trulli" />

                            </div> */}
                        </Col>
                        <Col className='textcenter h-auto d-block '>
                            <motion.h1
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: .5, delay: 0 }}
                                className='fw-bold h-auto mb-2 mt2 mxauto noscroll'>Next Generation Agency </motion.h1>
                            <motion.p
                               initial={{x:"50%", opacity: 0, scale: 0.5 }}
                               whileInView={{x:0, opacity: 1, scale: 1 }}
                                transition={{ duration: .7, delay: 0 }} className='fs-4 grey'>We love talking to your future community, we're fluent in market & competitive research, we live for strong community.</motion.p>
                            <motion.p
                               initial={{x:"50%", opacity: 0, scale: 0.5 }}
                               whileInView={{x:0, opacity: 1, scale: 1 }}
                                transition={{ duration: .8, delay: 0 }} className='fs-4 grey'>We take utility and fanbase for more than buzzwords, and we don't shy away from using classic technologies when they're best for you.</motion.p>

                            <motion.p
                               initial={{x:"50%", opacity: 0, scale: 0.5 }}
                               whileInView={{x:0, opacity: 1, scale: 1 }}
                                transition={{ duration: .9, delay: 0 }} className='fs-4 grey'>We believe in analytics, and in data-driven decisions. Guesswork is not an option when it comes to your success.</motion.p>
                        </Col>

                    </Row>
                </div>

                <Row className='d-block row no-gutter'>
                    <Col className='d-block text-center pt-5' id="help">

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .8, delay: 0 }} className='h-auto noscroll'>We know how it feels, and we're here to help.</motion.h1>
                        <p className=' fs-5 grey'>Welcome to our all-in-one solution for your WEB3 business</p>

                        <p className=' grey'>We got the services you need to make your project outstand in front of others.</p>
                    </Col>
                    <div className='h-auto w-100 '>
                        <div className="row no-gutter noscroll h-auto w-100">
                            <motion.div
                                initial={{y:"50%", opacity: 0, scale: 1 }}
                                whileInView={{y:0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0 }}

                                class="col-sm h-auto">
                                <InfoContainer Image={discord} title={"Discord building"} description={"We create astounding discord server that will match the value and vibe of your product"} />
                            </motion.div>
                            <motion.div
                                initial={{y:"50%", opacity: 0, scale: 1 }}
                                whileInView={{y:0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0 }}
                                class="col-sm h-auto">
                                <InfoContainer Image={security} title={"Maintenance & Security"} description={"We provide 24/7 maintenance to secure the discord server. Don't be scared of hackers, we got you!"} />
                            </motion.div>
                            <motion.div
                                 initial={{y:"50%", opacity: 0, scale: 1 }}
                                 whileInView={{y:0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.9, delay: 0 }}
                                class="col-sm">
                                <InfoContainer Image={operator} title={"Moderation & Speaker Services"} description={"Our moderation team has been among projects of all kinds and perfectly undestands the need of the community."} />
                            </motion.div>
                        </div>
                        <div class="row no-gutter noscroll h-auto">
                            <motion.div
                                 initial={{y:"50%", opacity: 0, scale: 1 }}
                                 whileInView={{y:0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0 }} class="col-sm">
                                <InfoContainer Image={social} title={"Social Media Management"} description={"We offer full-service social media management services. So, we transform social media presence with high-quality content daily activity, monitoring-engagement and increased followers."} />
                            </motion.div>
                            <motion.div
                                 initial={{y:"50%", opacity: 0, scale: 1 }}
                                 whileInView={{y:0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0 }} class="col-sm">
                                <InfoContainer Image={influencer} title={"Influencers & Partnerships"} description={"Based on your goals, we shape the optimal strategy that is right for you. This includes connecting you with the top social media influencers, vloggers and content creators to help you engage your target audience"} />
                            </motion.div>
                            <motion.div
                                 initial={{y:"50%", opacity: 0, scale: 1 }}
                                 whileInView={{y:0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.9, delay: 0 }} class="col-sm">
                                <InfoContainer Image={email} title={"Email Marketing"} description={"People check their email every day. Our email marketing services will help you standout. Whether we create weekly newsletters to send to your subscribers or we set up a drip sequence to send the right automated emails."} />
                            </motion.div>
                        </div>
                        <div class="row noscroll h-auto no-gutter">
                            <motion.div
                                 initial={{y:"50%", opacity: 0, scale: 1 }}
                                 whileInView={{y:0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0 }} class="col-sm">
                                <InfoContainer Image={website} title={"Website"} description={"Your website design should convert visitors to community, vastly improve your key metrics, adn display your project with pride."} />
                            </motion.div>
                            <motion.div
                                 initial={{y:"50%", opacity: 0, scale: 1 }}
                                 whileInView={{y:0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0 }} class="col-sm">
                                <InfoContainer Image={smartContracts} title={"Smart Contracts"} description={"We create low gas fee optimized smart contracts with your desired features, all connected to a breathtaking mint page."} />
                            </motion.div>
                            <motion.div
                                 initial={{y:"50%", opacity: 0, scale: 1 }}
                                 whileInView={{y:0, opacity: 1, scale: 1 }}
                                transition={{ duration: 0.9, delay: 0 }} class="col-sm">
                                <InfoContainer Image={collection} title={"Collection generation"} description={"Random generated NFT's are one of the most popular types of Non-Fungible tokens. Our team will create the best code for generating your collection, let us know if you need help to design them too."} />
                            </motion.div>
                            {/* <Service image = {collection} title={"Collection generation"} description={"Random generated NFT's are one of the most popular types of Non-Fungible tokens. Our team will create the best code for generating your collection, let us know if you need help to design them too."}></Service> */}
                        </div>
                    </div>
                </Row>

                {/* RowInfo2 */}
                <Row className='w-100 h-auto noscroll row no-gutter'>

                    <div className='d-block mx-auto h-auto noscroll text-center px-5 w50'>


                    <motion.p
                               initial={{ opacity: 0, scale: 0.5 }}
                               whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: .7, delay: 0 }} className='pt-2 fs-4 grey ml'>Many teams have trusted us with </motion.p>
                        <motion.p
                               initial={{ opacity: 0, scale: 0.5 }}
                               whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: .9, delay: 0 }} className='pt-2 fs-4 grey ml'>We know your struggles, it’s hard to build a team that would take care of your Web3 project, especially if you dream big and have a long term vision. Here is where we come into play and we are ready to share with you our strategies and code implementation.</motion.p>

                        <p className='pt-2 fs-4 '>Trusted by these companies</p>
                        <div className='d-flex w-100 justify-content-between mt-5'>
                            <img className="compImage" src={company1} alt="Italian Trulli" />
                            <img className="compImage" src={company2} alt="Italian Trulli" />
                            <img className="compImage" src={company3} alt="Italian Trulli" />
                            <img className="compImage" src={company4} alt="Italian Trulli" />
                        </div>
                    </div>

                </Row>

                <Row className='w-100 backImage d-flex h-auto noscroll justify-content-center mb-2 jcc row no-gutter ' id="start">

                    <div className='d-block mx-auto text-center h-100 noscroll w50  mt0'>
                        <p className='pt-5 fs2 '>Ready to start ?</p>
                        <p className='pt-2 fs-4 grey'>Let's book a call and let's talk ideas. </p>
                        <InlineWidget className="noscroll h-auto" url="https://calendly.com/nflagency/30min" />
                        
                        {/* <Button variant="" size="lg" className='greyborder fs-5 px-5   grey'>Contact us Now!</Button>
                         */}
                    </div>

                </Row>

            </div>
        </Fragment>

    );
}

export default Home;
