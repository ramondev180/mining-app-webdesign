import { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs"
function ReadyToStart(props) {
    useEffect(()=>{
        new WOW.WOW({
                live: false,  
            }
            ).init();
    },[])

    return ( 
        <>
        <div className="container wow fadeIn" data-wow-delay="1s" style={{ paddingTop:"100px" }} id={props.hash}>
            <div className="mt-5 text-center text-white py-5" style={{ background:"#222A53" }}>
                <h2 className="mb-4 wow fadeIn" data-wow-delay="1.3s">Ready To start Mining</h2>
                <p className="my-3 wow fadeIn" data-wow-delay="1.5s">Just create an account on our site and start your first mining.</p>
                <Link to="/sign-up" className="app_btn mt-2 wow fadeIn">Get Started</Link>
            </div>
        </div>
        </>
     );
}

export default ReadyToStart;