import {faCaretLeft, faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Component } from "react";
import {Link} from "react-router-dom";
import GoogleIcon from "../../assets/icons/GoogleIcon.svg";


class Step1 extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        showPassword:false,
     }

    actionMoveNext(e){
        e.preventDefault();
        this.props.nextAction(this.props.getState);
    }

    toggleShowPassword(){
        this.setState({showPassword:!this.state.showPassword});
    }

    render() { 
        return (
            <>
                <div className="mb-5 pb-3">
                    <div className="stages px-3 p-4">
                        <div className="back">
                            <span></span>
                        </div>
                        <div className="step">
                            <p style={
                                    {color: "#BDBDBD"}
                                }
                                className="mb-0">STEP 01/03</p>
                            <p style={
                                {color: "#8692A6"}
                            }>Personal Info.</p>
                        </div>
                    </div>
                    <div className="form-div">
                        <h1>Join Us</h1>
                        <p style={
                            {color: "#8692A6"}
                        }>For the purpose of security, your details are required.</p>
                        <form onSubmit={(e)=>this.actionMoveNext(e)}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="fullname">Fullname *</label>
                                <input className="form-control" name="fullname" id="fullname" placeholder="Enter fullname"/>
                            </div>
                            <div className="form-group mt-4">
                                <label className="form-label" htmlFor="email">Email address *</label>
                                <input className="form-control" name="email" id="email" placeholder="Enter email address"/>
                            </div>
                            <div className="form-group mt-4 d-flex flex-column">
                                <label className="form-label" htmlFor="password">Password *</label>
                                <div className="btn-group">
                                    <input className="form-control" name="password" type={(this.state.showPassword)?"text":"password"} id="password" placeholder="Enter password"/>
                                    <button type="button" className="btn" onClick={()=>this.toggleShowPassword()} >{(this.state.showPassword)?<FontAwesomeIcon icon={faEyeSlash}/>:<FontAwesomeIcon icon={faEye}/>}</button>
                                </div>
                            </div>
                            <div className="form-group mt-4">
                                <input id="agree" type="checkbox" className="form-checkbox"
                                    style={
                                        {marginRight: "19px"}
                                    }/>
                                <label htmlFor="agree">I agree to terms & conditions</label>
                            </div>
                            <div className="form-group mt-4">
                                <button className="btn w-100 text-white py-3"
                                    style={
                                        {background: "#0E1744"}
                                } onClick={(e)=>this.actionMoveNext(e)} type="button">Next</button>
                            </div>
                            <p className="text-center my-4"
                                style={
                                    {color: "#BABABA"}
                            }>Or</p>
                            <div className="form-group mt-4">
                                <button className="btn w-100 shadow py-3"
                                    style={
                                        {position: "relative"}
                                }>
                                    <img src={GoogleIcon}
                                        style={
                                            {
                                                position: "absolute",
                                                left: "10px",
                                                top: "18px"
                                            }
                                        }/>
                                    Register with Google
                                </button>
                            </div>
                            <p className="mt-5 text-center">
                                <span style={
                                    {color: "#8692A6"}
                                }>Have An Account</span>
                                <Link to="/sign-in" className="sign-in-link">
                                    Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Step1;