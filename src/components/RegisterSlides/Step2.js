import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Component} from "react";
import {Link} from "react-router-dom";
import GoogleIcon from "../../assets/icons/GoogleIcon.svg";


class Step2 extends Component {
    constructor(props) {
        super(props);
    }
    state = {}

    actionMoveNext(e) {
        e.preventDefault();
        this.props.nextAction(this.props.getState);
    }

    actionMoveBack(e) {
        e.preventDefault();
        this.props.backAction(this.props.getState);
    }

    render() {
        return (
            <>
                <div className="mb-5 pb-3">
                    <div className="stages px-3 p-4">
                        <div className="back"  onClick={
                            (e) => this.actionMoveBack(e)
                        }>
                            <FontAwesomeIcon icon={faCaretLeft}/>
                            <span>Back</span>
                        </div>
                        <div className="step">
                            <p style={
                                    {color: "#BDBDBD"}
                                }
                                className="mb-0">STEP 02/03</p>
                            <p style={
                                {color: "#8692A6"}
                            }>Residency Info.</p>
                        </div>
                    </div>
                    <div className="form-div">
                        <h1>Complete Your Profile!</h1>
                        <p style={
                            {color: "#8692A6"}
                        }>For the purpose of industry regulation, your details are required.</p>
                        <form onSubmit={
                            (e) => this.actionMoveNext(e)
                        }>
                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Phone number *</label>
                                <input className="form-control" name="phone" id="phone" placeholder="Enter fullname"/>
                            </div>
                            <div className="form-group mt-4">
                                <label className="form-label" htmlFor="address">Your address *</label>
                                <textarea className="form-control" name="address" id="address" placeholder="Enter address"></textarea>
                            </div>
                            <div className="form-group mt-4 d-flex flex-column">
                                <label className="form-label" htmlFor="country">Country of residence *</label>
                                <div className="btn-group">
                                    <select className="form-control" name="country" id="country">
                                        <option value="" disabled selected>Please select</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group mt-4">
                                <button className="btn w-100 text-white py-3"
                                    style={
                                        {background: "#0E1744"}
                                    }
                                    onClick={
                                        (e) => this.actionMoveNext(e)
                                    }
                                    type="button">Next</button>
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

export default Step2;
