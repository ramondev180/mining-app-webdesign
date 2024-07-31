import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";


function Price(props) {

    const RoundedCheck = styled.span `
            background:#0E1744;
            padding:5px;
            color:white;
            font-size:8px;
            border-radius:50%;
            margin-right:7px;
            display:block;    
        `;

        const PriceButton=styled.a`
            display: block;
            background: linear-gradient(106.75deg, #0E1744 0%, #3D6CB4 100%);
            transition :0.5s background;
            width: 171.49px;
            padding:9px 0;  
            margin:auto;
            border-radius: 66px;
            color:white;
        `
    return (
        <>
            <div className="price">
                <h1>New Customer Specials</h1>
                <div className="border-bottom">
                    <p className="mb-0">
                        <span className="fs-1 active-price-dark"
                            style={
                                {
                                    marginRight: "10px",
                                    color: "#0E1744"
                                }
                        }>$12</span>
                        <span>/ 365 Day</span>
                    </p>
                    <p className="mb-2">$12 / 365 Day</p>
                </div>
                <div className="mt-3">
                    <p className="d-flex align-items-center mb-2">
                        <RoundedCheck className="active-slide-check">
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                        </RoundedCheck>
                        <div>
                            <p className="mb-1">Contract Price: $12
                            </p>
                        </div>
                    </p>
                    <p className="d-flex align-items-center mb-2">
                        <RoundedCheck className="active-slide-check">
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                        </RoundedCheck>
                        <div>
                            <p className="mb-1">Contract Duration: 365 Days</p>
                        </div>
                    </p>
                    <p className="d-flex align-items-center mb-2">
                        <RoundedCheck className="active-slide-check">
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                        </RoundedCheck>
                        <div>
                            <p className="mb-1">Daily Mining: 0.00003
                            </p>
                            <p className="mb-1">BTC (= $0.54)</p>
                        </div>
                    </p>
                    <p className="d-flex align-items-center mb-2">
                        <RoundedCheck className="active-slide-check">
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                        </RoundedCheck>
                        <div>
                            <p className="mb-1">Hardware: Antminer S19</p>
                        </div>
                    </p>
                    <p className="d-flex align-items-center mb-2">
                        <RoundedCheck className="active-slide-check">
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                        </RoundedCheck>
                        <div>
                            <p className="mb-1">Monthly Mining: 0.00009</p>
                            <p className="mb-1"> BTC (= $16.2)</p>
                        </div>
                    </p>
                    <p className="d-flex align-items-center mb-2">
                        <RoundedCheck className="active-slide-check">
                            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                        </RoundedCheck>
                        <div>
                            <p className="mb-1">Purchase Agreement: <a style={{ color:"#D01E1E",textDecoration:"none" }} href="">View all</a></p>
                        </div>
                    </p>
                        <div>
                                <Link to="/sign-up" style={{ textDecoration:"none" }}>
                                    <PriceButton className="btn my-3 hover-price-btn">
                                            Get Started
                                    </PriceButton>
                            </Link>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Price;
