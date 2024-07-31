import {Swiper,SwiperSlide} from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import WOW from 'wowjs';
import { useEffect } from "react";
import "swiper/css/bundle"
import Price from "./Price";

function PriceSection(props) {
    useEffect(()=>{
        new WOW.WOW({
                live: false,  
            }
            ).init();
    },[])

    return ( <>
        <div className="price-section mb-5" id={props.hash} style={{ paddingTop:"100px" }}>
            <h2 className="text-center mb-5 wow zoomIn" data-wow-delay="1.5 s">Get results first. Pick a plan later.</h2>
            <div className="price-section-content">
                <Swiper className="priceSwiper"  loop={true} slidesPerView={"auto"} centeredSlides={true} spaceBetween={30} pagination={{ clickable:true }} modules={[Autoplay,Pagination]} autoplay={{ delay:5000,disabledOnInteraction:false }}>
                    <SwiperSlide  className="wow bounceInDown" data-wow-delay="0.5s">
                        <Price/>
                    </SwiperSlide>
                    <SwiperSlide className="wow bounceInDown" data-wow-delay="0.9s">
                        <Price/>
                    </SwiperSlide>
                    <SwiperSlide className="wow bounceInDown" data-wow-delay="1.4s">
                        <Price/>
                    </SwiperSlide>
                 
                </Swiper>
            </div>
        </div>
    </> );
}

export default PriceSection;