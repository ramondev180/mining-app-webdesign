import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import {Link} from "react-router-dom";
import GoogleIcon from "../assets/icons/GoogleIcon.svg";

class Login extends Component {
    constructor(props) {
        super(props);
    }
    state= {
        currentPage:1,
        showPassword:false
    }

    toggleShowPassword(){
        this.setState({showPassword:!this.state.showPassword});
    }

    render() { 
        return (
            <div>
             <div className="mb-5 pb-3 pt-5 mt-5">
                    <div className="form-div">
                        <h1>Welcome Back</h1>
                        <p style={
                            {color: "#8692A6"}
                        }>Fill in your required details.</p>
                        <form >

                            <div className="form-group mt-4">
                                <label className="form-label" htmlFor="email">Email address *</label>
                                <input className="form-control" name="email" id="email" placeholder="Enter email address"/>
                            </div>
                            <div className="form-group mt-4 d-flex flex-column">
                                <label className="form-label" htmlFor="password">Password *</label>
                                <div className="btn-group">
                                    <input className="form-control" name="password" type={(this.state.showPassword)?"text":"password"} id="password" placeholder="Enter password"/>
                                    <button type="button" className="btn" onClick={()=>this.toggleShowPassword()}>{(this.state.showPassword)?<FontAwesomeIcon icon={faEyeSlash}/>:
<FontAwesomeIcon icon={faEye}/>}</button>
                                </div>
                            </div>
                           
                            <div className="form-group mt-4">
                                <button className="btn w-100 text-white py-3"
                                    style={
                                        {background: "#0E1744"}
                                }  type="button">Submit</button>
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
                                    Login with Google
                                </button>
                            </div>
                            <p className="mt-5 text-center">
                                <span style={
                                    {color: "#8692A6"}
                                }>Have An Account</span>
                                <Link to="/sign-up" className="sign-in-link">
                                    Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Login;