import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Component} from "react";
import {Link} from "react-router-dom";
import {Swiper,SwiperSlide} from "swiper/react";
import { FreeMode, Pagination,Navigation } from "swiper";
import GoogleIcon from "../../assets/icons/GoogleIcon.svg";
import Price from "../Price";


class Step3 extends Component {
    constructor(props) {
        super(props);
    }
    state = {}

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
                                className="mb-0">STEP 03/03</p>
                            <p style={
                                {color: "#8692A6"}
                            }>Personal Info.</p>
                        </div>
                    </div>
                    <div className="form-div">
                        <h1>Choose Plan</h1>
                        <p style={
                            {color: "#8692A6"}
                        }>For the purpose of security, your details are required.</p>
                        <form onSubmit={
                            (e) => this.actionMoveNext(e)
                        }>
                            <div className="form-group mt-4">
                                <div className="price-section">
                                    <div className="price-section-content">
                                        <Swiper
                                                slidesPerView={"auto"}
                                                spaceBetween={40}
                                                centeredSlides={true}
                                                freeMode={true}
                                                navigation={true}
                                                pagination={{
                                                clickable: true,
                                                }}
                                                modules={[FreeMode, Pagination,Navigation]}
                                                 className="priceSwiper"
                                            >
                                                <SwiperSlide>
                                                
                                                    <Price/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Price/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Price/>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Price/>
                                                </SwiperSlide>
                                            </Swiper>
                                    </div>
                                </div>
                              </div>
                            <div className="form-group mt-4">
                                <button className="btn w-100 text-white py-3"
                                    style={
                                        {background: "#0E1744"}
                                    }
                                    
                                    type="button">Submit</button>
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

export default Step3;
