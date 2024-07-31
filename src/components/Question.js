import { Component } from "react";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from  "jquery"
import WOW from 'wowjs';


class Question extends Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        new WOW.WOW({
            live: false,  
        }
        ).init();
    }

    toggleQuestion(e){
        $(e.target).toggleClass("active");
    }

    render() { 
        return ( <>
            <div className="question py-3 px-2 px-md-5 mb-2 wow fadeInUp" data-wow-delay={this.props["data-wow-delay"]} style={{ background: "rgba(212, 213, 219, 0.1)",cursor:"pointer"}} onClick={(e)=> this.toggleQuestion(e)}>
                <div className="d-flex justify-content-between align-items-center"  style={{ pointerEvents:"none" }}>
                    <h5 className="text-white py-2 mb-0">How can I sign up?</h5>
                    <div className="text-white caret"> 
                        <FontAwesomeIcon icon={faCaretUp}/>
                    </div>
                </div>
                <div className="mt-3 p-3 answer" style={{ background:"white",pointerEvents:"none" }}>
                    <p>Register using your bitcoin wallet address, It takes only 1 minute.</p>
                </div>
            </div>
            </> );
    }
}



export default Question;