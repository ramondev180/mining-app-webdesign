import { Component } from "react";
import Step1 from "../components/RegisterSlides/Step1";
import Step2 from "../components/RegisterSlides/Step2";
import Step3 from "../components/RegisterSlides/Step3";

class Register extends Component {
    constructor(props) {
        super(props);
    }
    state= {
        currentPage:1,
    }

    moveNextStep(getState){
        getState.setState({currentPage:getState.state.currentPage+1});
    }
    moveBackStep(getState){
        getState.setState({currentPage:getState.state.currentPage-1});
    }
   

    render() { 
        return (
            <div>
            {
                this.state.currentPage==1?
                <Step1 nextAction={this.moveNextStep} getState={this}/> :
                this.state.currentPage==2?
                <Step2 nextAction={this.moveNextStep} backAction={this.moveBackStep}  getState={this}/> : 
                this.state.currentPage==3?
                <Step3 nextAction={this.moveNextStep} backAction={this.moveBackStep}  getState={this}/> :
                <div>
                    <h1>Something went wrong</h1>
                    <p>Refresh to clear this error</p>
                </div>
            }
            </div>
        );
    }
}
 
export default Register;