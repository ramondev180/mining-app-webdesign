import NavLogo from "../assets/images/nav-logo.svg";
import Quote from "../assets/icons/Quote.svg";
import EndBox from "../assets/icons/EndBox.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AuthLayout(props) {
    const {children} = props;
    document.body.style.background = "white";
    return (
        <>
            <div className="auth-body">
                <div className="auth_background">
                    <Link className="logo" to="/">

                        <img src={NavLogo}/>
                        <p className="mb-0">Keynet</p>

                    </Link>
                    <div className="quote">
                        <img src={Quote}
                            className="mb-3"/>
                        <p>Whereas most technologies tend to automate workers on the periphery doing menial tasks, blockchains automate away the center. Instead of putting the taxi driver out of a job, blockchain puts Uber out of a job and lets the taxi drivers work with the customer directly.<br/>Vitalik Butterin
                            <FontAwesomeIcon icon={faCheck}
                                style={
                                    {
                                        marginLeft: "10px",
                                        color: "white",
                                        fontSize: "10px",
                                        padding: "5px",
                                        borderRadius: "50%",
                                        background: "#08AD36"
                                    }
                                }/>
                        </p>
                        <img src={EndBox}
                            className="endbox mb-3"/>
                    </div>
                </div>
                <div className="content">
                    {children} </div>
            </div>
        </>
    );
}

export default AuthLayout;
