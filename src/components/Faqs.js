import Question from "./Question";
import WOW from 'wowjs';
import {Component} from "react";
import $ from "jquery"

class FAQS extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new WOW.WOW({live: false}).init();
    }

    toggleTabQuestion(e) {
        let parent=$(e.target).parents();
        let selector=$(e.target).data().target
        $(".faq p").removeClass('active');
        parent.toggleClass('active');
        $(".questions").removeClass('active');
        $(selector).addClass('active');
    }

    render() {
        return (
            <>
                <div className="container faq" id={this.props.hash} style={{ paddingTop:"140px" }}>
                    <div className="text-center">
                        <h1 className="text-white wow fadeIn" data-wow-delay="0.5s">FAQs</h1>
                        <p 
                        style={{ color:"#3D6CB4" }}
                            className="wow fadeInDown"
                            data-wow-delay="0.8s">Frequently Asked Questions</p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4">
                            <p 
                                className="small-sm wow fadeIn p active"
                                data-wow-delay="1s">
                                <span  data-target="#general" onClick={
                                        (e) => this.toggleTabQuestion(e)
                                    }
                                    style={
                                        {cursor: "pointer"}
                                }>General</span>
                            </p>
                        </div>
                        <div className="col-4">
                            <p className="p text-center small-sm small-text-center wow fadeIn" data-wow-delay="1.3s">
                                <span  data-target="#mining" onClick={
                                        (e) => this.toggleTabQuestion(e)
                                    }
                                    style={
                                        {cursor: "pointer"}
                                }>Mining</span>
                            </p>
                        </div>
                        <div className="col-4">
                            <p className="p text-end small-sm wow fadeIn" data-wow-delay="1.5s">
                                <span  data-target="#affiliate" onClick={
                                        (e) => this.toggleTabQuestion(e)
                                    }
                                    style={
                                        {cursor: "pointer"}
                                }>Affiliate Programs</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="questions active" id="general">
                            <Question/>
                            <Question/>
                        </div>
                        <div className="questions" id="mining">
                            <Question/>
                            <Question/>
                        </div>
                        <div className="questions" id="affiliate">
                            <Question/>
                            <Question/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FAQS;
