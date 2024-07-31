import { useEffect } from "react";
import {useSelector} from "react-redux";
import { Link } from "react-scroll";
import FAQS from "../components/Faqs";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PriceSection from "../components/PriceSection";
import ReadyToStart from "../components/ReadyToStart";
import Section from "../components/Section";
import Service from "../components/Service";
import AppContext from "../contexts/AppContext";

function AppLayout(props) {
    const {bodyBackground}=props;
    const pageData = useSelector((state) => state.app);
    const config = {
        ... pageData
    }

    useEffect(()=>{
        document.body.style.backgroundColor = bodyBackground;
    },[]);
    return (
        <AppContext.Provider value={config}>
            <div>
                <Nav linkType="scroll"/>
                <Section hash="home"/>
                <PriceSection hash="pricing"/>
                <Service hash="service"/>
                <FAQS hash="faqs"/>
                <ReadyToStart hash="mining_"/>
                <Footer/>
            </div>
        </AppContext.Provider>
    );
}

export default AppLayout;
