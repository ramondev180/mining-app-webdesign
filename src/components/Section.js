import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionImg from "../assets/images/section-img.svg";
import { motion } from "framer-motion";

function Section(props) {
    return ( 
        <section className="home__section pt-5" id={props.hash}>
            <Container className="pt-5 mt-4">
                <Row>
                    <Col md="6" sm="6" lg="6" className="text-center">
                        <motion.img src={SectionImg} alt="Section Image" animate={{ y: 0,opacity:1 }} transition={{ delay: 0.1, default: { ease: "easeOut" }  }} initial={{ y:"-100px",opacity:0}} whileHover={{ scale: 1.1 }}/>
                    </Col>
                    <Col md="6" sm="6" lg="6">
                        <motion.h1 className="fs-1 mt-3" animate={{ opacity:1,scaleY:1 }} initial={{scaleY:0.5,opacity:0}} transition={{ delay: 0.3,default: { ease: "easeOut" }  }}>Start Earning <br/>With a Trusted <br/>Mining Platform Now</motion.h1>
                        <motion.p className="mt-4" animate={{ opacity:1 }} initial={{opacity:0}} transition={{ delay: 0.5,default: { ease: "easeIn" }  }}>Join  over 200000 others with world's leading top hashpower provider! Your mining rigs are already set up and operational, so it couldn't be easier. You may begin mining your first coins utilizing our Bitcoin cloud mining service as soon as you've created an account!</motion.p>
                        <motion.div animate={{ x:0,opacity:1 }} initial={{x:-50,opacity:0}} transition={{ delay: 0.8,default: { ease: "easeIn" }  }}>
                            <Link to="/plans" className="app_btn mt-2">Start Mining</Link>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
     );
}

export default Section;