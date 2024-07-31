import {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Price from "../../components/Price";
import $ from "jquery"

class Monthly extends Component {
    constructor(props) {
        super(props);
    }
    state = {}

    tabPlan(e){
        const target_id=$(e.target).data().target;
        $(".monthly .plan_tab_button").removeClass("active");
        $(e.target).addClass("active");
        
        $(".monthly .price-section-content").removeClass("active");
        $(`.monthly .price-section-content${target_id}`).addClass("active");
    }

    render() {
        return (
            <>

                <div className="wallet-tab">
                    <div className="plan-tab monthly">
                        <button>
                            <span className="active plan_tab_button" data-target="#btc" onClick={(e)=>this.tabPlan(e)}>BTC</span>
                            <span data-target="#eth" className="plan_tab_button"  onClick={(e)=>this.tabPlan(e)}>ETH</span>
                            <span data-target="#doge" className="plan_tab_button"  onClick={(e)=>this.tabPlan(e)}>DOGE</span>
                        </button>
                    </div>
                </div>

                <div className="price-tab monthly">
                    <div className="price-section">
                        <div className="price-section-content active" id="btc">
                            <div className="priceSwiper m-auto">
                                <Container>
                                    <Row>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="price-section-content" id="eth">
                            <div className="priceSwiper m-auto">
                                <Container>
                                    <Row>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className="price-section-content" id="doge">
                            <div className="priceSwiper m-auto">
                                <Container>
                                    <Row>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                        <Col sm="4">
                                            <Price/>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Monthly;
