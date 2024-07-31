import {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import WOW from 'wowjs';
import Wallet from "../assets/icons/Wallet.svg";
import Socket from "../assets/icons/Socket.svg";
import Locked from "../assets/icons/Locked.svg";
import Trading from "../assets/icons/Trading.svg";
import DataSecure from "../assets/icons/DataSecure.svg";
import Support from "../assets/icons/Support.svg";
import ServiceBox from "./ServiceBox";

function Service(props) {

    useEffect(() => {
        new WOW.WOW({live: false}).init();
    }, [])

    return (
        <>
            <div style={{ paddingTop:"90px" }} id={props.hash}>
                <div className="text-center my-5">
                    <h1 className="text-white mb-3 wow fadeIn" data-wow-delay="0.5s">Service</h1>
                    <p style={
                            {color: "#3D6CB4"}
                        }
                        className="wow fadeIn"
                        data-wow-delay="0.7s">Multiple Keynet
                    </p>
                </div>
                <Container>
                    <Row>
                        <Col sm="4" className="p-4 wow fadeInLeft" data-wow-delay="0.8s">
                            <ServiceBox icon={Wallet}/>
                        </Col>
                        <Col sm="4" className="p-4 wow fadeIn" data-wow-delay="1s">
                            <ServiceBox icon={Socket}/>

                        </Col>
                        <Col sm="4" className="p-4 wow fadeInRight" data-wow-delay="1.3s">
                            <ServiceBox icon={Locked}/>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" className="p-4 wow fadeInLeft" data-wow-delay="1.4s">
                            <ServiceBox icon={Trading}/>

                        </Col>
                        <Col sm="4" className="p-4 wow fadeIn" data-wow-delay="1.6s">
                            <ServiceBox icon={DataSecure}/>

                        </Col>
                        <Col sm="4" className="p-4 wow fadeInRight" data-wow-delay="1.8s">
                            <ServiceBox icon={Support}/>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Service;
