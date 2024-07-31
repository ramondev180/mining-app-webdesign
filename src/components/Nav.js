import {Component, useContext, useEffect} from "react";
import {useDispatch} from "react-redux";
import Link from "./Link";
import NavLogo from "../assets/images/nav-logo.svg";
import AppContext from "../contexts/AppContext";
import {toggleMobileMenu} from "../slices/AppReducer";
import $ from 'jquery';


class Nav extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){

        $(document).ready(function(){
            Nav.NavEffectOnScroll();
        })
    }

   static NavEffectOnScroll(){
       window.addEventListener("scroll",function(){
        let windowHeight = window.scrollY;
        if(windowHeight > 500){
            $("header").addClass("active_scroll");
            $("header").css("transform","translateY(0%)");
            $(".mobile_menu").addClass("m_active_scroll");
        }else if(windowHeight>100){
            $("header").removeClass("active_scroll");
            $(".mobile_menu").removeClass("m_active_scroll");
        }else{
            $("header").removeClass("active_scroll");
            $(".mobile_menu").removeClass("m_active_scroll");
            $("header").css("transform","translateY(0%)");
        }
       });
    }

    render() {
        const {navLinkType} = this.props;

        return (
            <>
                <div className={
                        `nav-layout ${
                            this.props.pageData.openMobileMenu ? "active" : ""
                        }`
                    }
                    onClick={
                        () => this.props.dispatch(toggleMobileMenu())
                }></div>
                <div className={
                        `mobile_menu ${
                            this.props.pageData.openMobileMenu ? "active" : ""
                        }`
                    }
                    onClick={
                        () => this.props.dispatch(toggleMobileMenu())
                }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <header>
                    <Link className="logo" to="/">
                        <img src={NavLogo}
                            alt="Nav Logo"/>
                        <p>Keynet</p>
                    </Link>
                    <nav className="nav">
                        <ul>
                            <li>
                              <Link  linkTo="/" scrollTo="home" type={navLinkType}>Home</Link>
                            </li>
                            <li>
                              <Link  linkTo="/about" scrollTo="about" type={"link"}>About</Link>
                            </li>
                            <li>
                              <Link  linkTo="/" scrollTo="pricing" type={navLinkType}>Pricing</Link>
                            </li>
                            <li>
                              <Link linkTo="/" scrollTo="service" type={navLinkType}>Service</Link>
                            </li>
                            <li>
                              <Link linkTo="/" scrollTo="faqs" type={navLinkType}>FAQS</Link>
                            </li>
                            <li>
                              <Link linkTo="/" scrollTo="mining_" type={navLinkType}>Mining</Link>
                            </li>
                            {/*
                          */}
                        </ul>
                    </nav>
                    <div className="auth">
                        <Link to="/sign-in">Sign in</Link>
                        <Link to="/sign-up" className="sign-up">Sign up</Link>
                    </div>
                </header>
                <div className={
                    `mobile_side_menu  ${
                        this.props.pageData.openMobileMenu ? "active" : ""
                    }`
                }>
                    <ul>
                        <li>
                            <Link linkTo="/" scrollTo="home" type={navLinkType} onClick={ () => this.props.dispatch(toggleMobileMenu())}>Home</Link>
                        </li>
                        <li>
                            <Link linkTo="/" scrollTo="pricing" type={navLinkType} onClick={ () => this.props.dispatch(toggleMobileMenu())}>Pricing</Link>
                        </li>
                        <li>
                            <Link linkTo="/"  scrollTo="service" type={navLinkType} onClick={ () => this.props.dispatch(toggleMobileMenu())}>Service</Link>
                        </li>
                        <li>
                            <Link linkTo="/" scrollTo="faqs" type={navLinkType} onClick={ () => this.props.dispatch(toggleMobileMenu())}>FAQS</Link>
                        </li>
                        <li>
                            <Link linkTo="/"  scrollTo="mining_" type={navLinkType} onClick={ () => this.props.dispatch(toggleMobileMenu())}>Mining</Link>
                        </li>
                        <li>
                            <Link to="/sign-in" onClick={() => this.props.dispatch(toggleMobileMenu())}>Sign In</Link>
                        </li>
                        <li>
                            <Link to="/sign-up" onClick={  () => this.props.dispatch(toggleMobileMenu())}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}


function NavWithProps({linkType}) {
    const pageData = useContext(AppContext);
    const dispatch = useDispatch();
    return <Nav pageData={pageData} dispatch={dispatch} navLinkType={linkType}/>
}

export default NavWithProps;
