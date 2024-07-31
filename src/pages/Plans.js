import {Col, Container, Row} from "react-bootstrap";
import DarkLogo from "../assets/images/dark-logo.svg";
import "../styles/Plan.scss";
import {Component} from "react";
import Yearly from "../components/plans/Yearly";
import Monthly from "../components/plans/Monthly";
import $ from "jquery"
class Plans extends Component {
    constructor(props) {
        super(props);
    }
   
    componentDidMount(){
         document.body.style.backgroundColor = "white";
    }

    tabPlanTime(e){
        const target_id=$(e.target).attr("id");
        $(".plan-time").removeClass("active");
        $(e.target).addClass("active");
        
        $("#plan-time-tab [data-target-from]").removeClass("active");
        $(`#plan-time-tab [data-target-from='#${target_id}']`).addClass("active");
    }

    render() {
        return (
            <>
                <div className="plans mb-5">
                    <header>
                        <div className="logo">
                            <img src={DarkLogo}
                                width="74.11px"
                                height="51px"/>
                            <p style={
                                {
                                    color: "#0E1744",
                                    marginLeft: "2px"
                                }
                            }>Keynet</p>
                        </div>
                        <div className="plan-tab">
                            <button>
                                <span id="monthly" className="plan-time active" onClick={(e)=>this.tabPlanTime(e)}>Monthly</span>
                                <span id="yearly"className="plan-time" onClick={(e)=>this.tabPlanTime(e)}>Yearly</span>
                            </button>
                        </div>
                    </header>
                    <div className="content">
                        <h4 style={
                            {fontSize: "30px"}
                        }>Transparent Pricing Plans</h4>
                        <p className="text-muted">No surprise fees, premium security guaranteed</p>
                        <div className="way">
                            <p>Your selected mining contract Is activated automatically once your payment Is confirmed.</p>
                            <p>For example if you activate ECONOMY miner with 770 USD, after 30 days you can withdraw 0.177 BTC</p>
                            <p>
                                <span className="text-danger">Don't lose time</span>
                                and activate one of the best Bitcoin miners today. You can have the fastest bitcoin miner in 5 minutes:</p>
                            <p>1-Choose one of the below miners</p>
                            <p>2-Click on
                                <span className="text-success">"Buy Now"</span>
                                button and pay the miner price</p>
                            <p>3-Your miner is launched and adds bitcoin to your balance every second (until 1 year)</p>
                            <p>4-Your bitcoin increase every minute and you can withdraw it or buy a new bigger miner</p>

                        </div>
                        <div id="plan-time-tab">
                            <div data-target-from="#monthly" className="active">
                                <Monthly/>
                            </div>
                            <div data-target-from="#yearly">
                                <Yearly/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Plans;
