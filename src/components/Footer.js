import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavLogo from "../assets/images/nav-logo.svg";

function Footer() {
    return ( 
        <>
            <footer className="my-5 py-3">
                <Container className="border-top p-3 pt-5">
                    <Row>
                        <Col sm="4">
                           <div>
                                <a className="d-flex text-white d-block" style={{ textDecoration:"none" }}>
                                    <img src={NavLogo} style={{marginRight:"10px"}} width="45px"/>
                                    <p className="mb-0">Keynet</p>
                                </a>
                           </div>
                           <p className="text-muted mt-5">Keynet is one of the leading cryptocurrency mining platforms, offering cryptocurrency mining capacities in every range - for newcomers. Our mission is to make acquiring cryptocurrencies easy and fast for everyone.</p>
                        </Col>
                        <Col sm="8">
                           <Row className="text-white">
                                <Col sm="3" className="footer-link">
                                    <h6>Quick Links</h6>
                                    <div className="pt-3">
                                        <Link to="/sign-in" className="mb-3 text-muted">Login</Link>
                                        <Link to="/sign-up"  className="mb-3 text-muted">Register</Link>
                                    </div>
                                </Col>
                                <Col sm="3" className="footer-link">
                                    <h6>Useful Links</h6>
                                    <div className="pt-3">
                                        <a href="#" className="mb-3 text-muted">Usage Policy</a>
                                        <a href="#"  className="mb-3 text-muted">Privacy Policy</a>
                                    </div>
                                </Col>
                                <Col sm="6" className="footer-link">
                                    <h6>Contact Info</h6>
                                    <div className="pt-3">
                                        <p className="text-muted">support@Keynet.com</p>
                                       <p className="text-muted">57-60 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</p>
                                    </div>
                                </Col>
                           </Row>
                        </Col>
                    </Row>
                </Container>
                <p className="text-light mt-3 text-center">COPYRIGHT © 2019-2022  Keynet ALL RIGHT RESERVED</p>
            </footer>
        </>
     );
}

export default Footer;