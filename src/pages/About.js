import {useEffect} from "react";
import {useSelector} from "react-redux";
import AppContext from "../contexts/AppContext";
import Nav from "../components/Nav";
import ReadyToStart from "../components/ReadyToStart";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BitCoinImg from "../assets/images/bitcoin.svg";
import Plane from "../assets/icons/plane.svg";
import Computer from "../assets/icons/computer.svg";
import Multiple from "../assets/icons/Multiple.svg";
import addUser from "../assets/icons/addUser.svg";
import checkBox from "../assets/icons/checkBox.svg";
import Mining from "../assets/icons/mining.svg";
import lightMining from "../assets/icons/lightMining.svg";
import Analysis from "../assets/icons/Analysis.svg";
import lightAnalysis from "../assets/icons/lightAnalysis.svg";
import Block from "../assets/icons/blocks.svg";
import Locks from "../assets/icons/Lucks.svg";
import WOW from "wowjs"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";




import "../styles/About.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faStar, faWallet } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";


const Icon=styled.div`
    color:white;
    font-size:32px;
`;

const StarIcon=styled.span`
    color:#FFA100;
    margin-right:5px;
`

function About(props) {
    const {bodyBackground} = props;

    const pageData = useSelector((state) => state.app);
    const config = {
        ... pageData
    }


    useEffect(() => {
        document.body.style.backgroundColor = bodyBackground;
        new WOW.WOW({
                live: false,  
            }
            ).init();
    }, []);

  

    return (
        <>
            <AppContext.Provider value={config}>
                <div class="about_page">
                    <Nav linkType="link"/>

                    <section className="home__section pt-5" id={props.hash}>
                        <Container className="pt-5 mt-4">
                            <Row>
                                <Col md="6" sm="6" lg="6" className="text-center">
                                    <motion.img src={BitCoinImg} alt="Section Image" animate={{ y: 0,opacity:1 }} transition={{ delay: 0.1, default: { ease: "easeOut" }  }} initial={{ y:"-100px",opacity:0}} whileHover={{ scale: 1.1 }}/>
                                </Col>
                                <Col md="6" sm="6" lg="6">
                                    <motion.h1 className="fs-1 mt-3" animate={{ opacity:1,scaleY:1 }} initial={{scaleY:0.5,opacity:0}} transition={{ delay: 0.3,default: { ease: "easeOut" }  }}>About  The Platform</motion.h1>
                                    <motion.p className="mt-4" animate={{ opacity:1 }} initial={{opacity:0}} transition={{ delay: 0.5,default: { ease: "easeIn" }  }}>We are affordable and easy-to-use cloud mining service. We have the cheapest source of renewable electricity in the world.If you’re looking to mine Bitcoin or Ethereum, We are a great choice, allowing you to mine cryptocurrencies without owning any equipment.</motion.p>
                                    <motion.div animate={{ x:0,opacity:1 }} initial={{x:-50,opacity:0}} transition={{ delay: 0.8,default: { ease: "easeIn" }  }}>
                                        <div className="d-flex">
                                            <div className="p-2">
                                                <img src={Plane} width="32" height="34"/>
                                            </div>
                                            <div style={{ marginLeft:"9px" }}>
                                               <p>
                                               <b className="text-white">Performance</b><br/>
                                                <span> Ultimate performance at low cost</span>
                                               </p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="p-2">
                                                <img src={Computer} width="32" height="34"/>
                                            </div>
                                            <div style={{ marginLeft:"9px" }}>
                                               <p>
                                               <b className="text-white">World Wide Service</b><br/>
                                                <span> Servicing over 90,621 + customers from 100+ countries</span>
                                               </p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="p-2">
                                                <img src={Multiple} width="32" height="34"/>
                                            </div>
                                            <div style={{ marginLeft:"9px" }}>
                                               <p>
                                               <b className="text-white"> Multiple Cryptocurrencies</b><br/>
                                                <span>We are offering 10+ minable cryptocurrencies.</span>
                                               </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <div className="content">
                        <div className="text-center">
                            <h1 className="text-white">How it Works</h1>
                            <p style={{ color:"#898CA9" }}>Learn about our work process. You need to follow the steps below to start your first mining.</p>
                        </div>
                        <Container>
                            <Row>
                                <Col sm="3" className="mt-3">
                                  <div>
                                       <div className="py-2 mb-3">
                                            <img src={addUser} width="72"/>
                                       </div>
                                        <div>
                                            <h6 className="text-white mb-3"> Create An Account</h6>
                                            <p style={{ color:"#898CA9" }}>Create a user profile for yourself using the register option and get ready to mining.New User Get $5~50 USD For Free.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="3" className="mt-3">
                                  <div>
                                       <div className="py-2 mb-3">
                                            <img src={checkBox} width="72"/>
                                       </div>
                                        <div>
                                            <h6 className="text-white mb-3">Choose Plans</h6>
                                            <p style={{ color:"#898CA9" }}>Top up your balance and buy plans at the most reasonable price.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="3" className="mt-3">
                                  <div>
                                       <div className="py-2 mb-3">
                                            <img src={Mining} width="72"/>
                                       </div>
                                        <div>
                                            <h6 className="text-white mb-3">Start Mining</h6>
                                            <p style={{ color:"#898CA9" }}>Now you are ready to mine! Mining will start automatically after purchasing the plan without any action required.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="3" className="mt-3">
                                  <div>
                                       <div className="py-2 mb-3">
                                            <img src={Analysis} width="72"/>
                                       </div>
                                        <div>
                                            <h6 className="text-white mb-3">Get Mining Output</h6>
                                            <p style={{ color:"#898CA9" }}>You will periodically receive mining output from your designated wallet. Try our mining platform now!</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="content mt-5 pt-5">
                        <Container>
                        <div className="text-center">
                            <h1 className="text-white">Why Choose Us</h1>
                            <p style={{ color:"#898CA9" }}>We are combining all the key aspects of conducting an efficient cryptocurrency mining activity. From building a highly efficient data center to providing a robust mining system for our users.</p>
                        </div>
                            <Row className="mt-5">
                                <Col sm="4" className="mt-3">
                                  <div className="p-3" style={{ background:"rgb(34, 45, 100)",borderRadius:"15px" }}>
                                       <div className="py-2">
                                          <Icon>
                                             <FontAwesomeIcon icon={faGlobe}/>
                                          </Icon>
                                       </div>
                                        <div>
                                            <h6 className="text-white mb-1">Multilingual</h6>
                                            <p style={{ color:"#898CA9" }}>As we run our business in 100+ countries we have a multilingual feature in your system.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="4" className="mt-3">
                                  <div className="p-3" style={{ background:"rgb(34, 45, 100)",borderRadius:"15px" }}>
                                       <div className="py-2">
                                          <Icon>
                                             <FontAwesomeIcon icon={faWallet}/>
                                          </Icon>
                                       </div>
                                        <div>
                                            <h6 className="text-white mb-1">Easy Payment System</h6>
                                            <p style={{ color:"#898CA9" }}>We have 20+ payment methods in our system. You can easily complete your payment.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="4" className="mt-3">
                                  <div className="p-3" style={{ background:"rgb(34, 45, 100)",borderRadius:"15px" }}>
                                       <div className="py-2">
                                          <Icon>
                                             <img src={lightAnalysis} width="40"/>
                                          </Icon>
                                       </div>
                                        <div>
                                            <h6 className="text-white mb-1">Daily Mining Output</h6>
                                            <p style={{ color:"#898CA9" }}>Our system will automatically add your daily mining results to your account. Also, you are able to withdraw that amount.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="4" className="mt-3">
                                  <div className="p-3" style={{ background:"rgb(34, 45, 100)",borderRadius:"15px" }}>
                                       <div className="py-2 mb-2">
                                          <Icon>
                                             <img src={Block} width="40"/>
                                          </Icon>
                                       </div>
                                        <div>
                                            <h6 className="text-white mb-1">Intutuive Dashboard</h6>
                                            <p style={{ color:"#898CA9" }}>Our system dashboard contains all your crypto mining data and charts.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="4" className="mt-3">
                                  <div className="p-3" style={{ background:"rgb(34, 45, 100)",borderRadius:"15px" }}>
                                       <div className="py-2">
                                          <Icon>
                                             <img src={lightMining} width="40"/>
                                          </Icon>
                                       </div>
                                        <div>
                                            <h6 className="text-white mb-1">Robust Mining Technology</h6>
                                            <p style={{ color:"#898CA9" }}>For each of the blockchain algorithms that we have proposed, we are providing some of the highest performance mining systems available.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="4" className="mt-3">
                                  <div className="p-3" style={{ background:"rgb(34, 45, 100)",borderRadius:"15px" }}>
                                       <div className="py-2">
                                          <Icon>
                                             <img src={Locks} width="40"/>
                                          </Icon>
                                       </div>
                                        <div>
                                            <h6 className="text-white mb-1">Secure and Private</h6>
                                            <p style={{ color:"#898CA9" }}>We support cryptocurrencies that promote privacy, so we keep user data collected to a minimum.</p>
                                        </div>
                                    </div>
                                </Col>
        
                            </Row>
                        </Container>
                    </div>
                    <div className="content mt-5 pt-5">
                        <Container>
                            <div className="text-center">
                                <h1 className="text-white">Our Services</h1>
                                <p style={{ color:"#898CA9" }}>We provide the best services to our miners, be connected with us, and get profited.</p>
                            </div>
                                <Row className="mt-5">
                                    <Col sm="4" className="mt-3">
                                    <div className="p-3 py-4" style={{ background:"white",borderRadius:"15px" }}>
                                            <div>
                                                <h5  style={{color:"#0E1744"}} className="mb-1">Instant Connect</h5>
                                                <p className="mb-0" style={{ color:"#898CA9" }}>Our team of experts always available and feels happy to help you. Please mail if you have issue.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm="4" className="mt-3">
                                        <div className="p-3 py-4" style={{ background:"white",borderRadius:"15px" }}>
                                            <div>
                                                <h5  style={{color:"#0E1744"}} className="mb-1">24/7 Support</h5>
                                                <p className="mb-0" style={{ color:"#898CA9" }}>We are ready to answer all your questions and advise you 24/7. Feel free to reach us anytime.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm="4" className="mt-3">
                                        <div className="p-3 py-4" style={{ background:"white",borderRadius:"15px" }}>
                                            <div>
                                                <h5  style={{color:"#0E1744"}} className="mb-1">Easy Withdawal</h5>
                                                <p className="mb-0" style={{ color:"#898CA9" }}>Our withdrawal process takes only 24 hours. We are highly transparent about transactions.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm="4" className="mt-3">
                                        <div className="p-3 py-4" style={{ background:"white",borderRadius:"15px" }}>
                                            <div>
                                                <h5  style={{color:"#0E1744"}} className="mb-1">Data Protection</h5>
                                                <p className="mb-0" style={{ color:"#898CA9" }}>We constantly work on improving our system and the level of our security to minimize any risks.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm="4" className="mt-3">
                                        <div className="p-3 py-4" style={{ background:"white",borderRadius:"15px" }}>
                                            <div>
                                                <h5  style={{color:"#0E1744"}} className="mb-1">Cloud Mining</h5>
                                                <p className="mb-0" style={{ color:"#898CA9" }}>We provide the best cloud mining service and give rewards to our miners on a daily basis.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm="4" className="mt-3">
                                        <div className="p-3 py-4" style={{ background:"white",borderRadius:"15px" }}>
                                            <div>
                                                <h5  style={{color:"#0E1744"}} className="mb-1">Detailed Statistics</h5>
                                                <p className="mb-0" style={{ color:"#898CA9" }}>We make detailed statistics of your transaction, also you will get all the mining logs.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                        </Container>
                    </div>
                    <div className="content mt-5 pt-5">
                            <div className="text-center mb-3">
                                <h1 className="text-white">What people are saying about us</h1>
                                <p style={{ color:"#898CA9" }}>A huge number of people trust us and here are the words of some of them.</p>
                            </div>
                      
                                <Container className="mt-5">
                                        <Swiper
                                            slidesPerView={"auto"}
                                            spaceBetween={30}
                                            loop={true}
                                            autoplay={{ delay:5000,disabledOnInteraction:false }}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            modules={[Autoplay]}
                                            className="testimonial_swiper"
                                        >
                                            <SwiperSlide>
                                                <div className="py-4 px-3">
                                                    <div className="stars">
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                    </div>
                                                    <div className="comment mt-4">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
                                                    </div>
                                                    <div className="user mt-5 d-flex">
                                                       <div style={{ marginRight:"17px" }}>
                                                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" width="48px"/>
                                                       </div>
                                                        <div >
                                                            <h6>Kenneth James</h6>
                                                            <p className="text-muted">Johannesburg </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>

                                            <SwiperSlide>
                                                <div className="py-4 px-3">
                                                    <div className="stars">
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                    </div>
                                                    <div className="comment mt-4">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
                                                    </div>
                                                    <div className="user mt-5 d-flex">
                                                       <div style={{ marginRight:"17px" }}>
                                                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" width="48px"/>
                                                       </div>
                                                        <div >
                                                            <h6>Kenneth James</h6>
                                                            <p className="text-muted">Johannesburg </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>

                                            <SwiperSlide>
                                                <div className="py-4 px-3">
                                                    <div className="stars">
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                        <StarIcon>
                                                            <FontAwesomeIcon icon={faStar}/>
                                                        </StarIcon>
                                                    </div>
                                                    <div className="comment mt-4">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
                                                    </div>
                                                    <div className="user mt-5 d-flex">
                                                       <div style={{ marginRight:"17px" }}>
                                                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" width="48px"/>
                                                       </div>
                                                        <div >
                                                            <h6>Kenneth James</h6>
                                                            <p className="text-muted">Johannesburg </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                           
                                        </Swiper>
                                </Container>
                                    
                            
                    </div>
                </div>

                <ReadyToStart/>
                <Footer/>

            </AppContext.Provider>

        </>
    );
}

export default About;
