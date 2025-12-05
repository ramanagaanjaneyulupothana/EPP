import React, {useState} from "react";
import HeaderSection from "./headerSection";
import NavBarSection from "./navBarSection";
import { PosterSection } from "./posterSection";
import WhiteBox from "./whiteBox";
import './eventsCssComponent.css';
import AppInfoComponent from "./appInfoComponent";
import { FaLock } from "react-icons/fa";
import LoginForm from "./loginForm";

export default function EventsComponent(){

    const [showLogin, setShowLogin] = useState(false);

    const openLogin = () => setShowLogin(true);
    const closeLogin = () => setShowLogin(false);


    return(
        <div>
            <HeaderSection />
            <NavBarSection />
            <PosterSection />
            <WhiteBox>
                <div className="featured-section py-5">
                    <h3 className="fw-bold text-center featured-title" style={{color:'#910B3D'}}>
                        Parichaya Vedhika Events
                    </h3>
                    <img src="/images/tit-bot-bg.png" className="featured-decor" alt="decor-line" />
                <p>
                    "Eenadu Pellipandiri Parichaya Vedika" is a unique service offered by Eenadu Pellipandiri. This unique interactive feature is specially designed for prospective brides and bridegrooms of same religion and same community to meet and select their life partners in an interactive session arranged by Eenadu Pellipandiri.
                </p>
                <p>
                    Eenadu Pellipandiri will announce dates of "Eenadu Pellipandiri Parichaya Vedika" from time to time through various media vehicles that may include "Eenadu" Newspaper, ETV satellite channels network, etc.
                </p>
                <p>
                    Members opting to participate in such will register themselves either through online or by visiting Eenadu Offline Centres of their convenience. The Members would pay a participation fee as announced from time to time for respective event
                </p>
                    For more details and guidance please mail us at <span className="fw-bold">events@eenadupellipandiri.net</span>
                </div>
                
                <div className="mt-2 mb-5">
                  <p>To Register For Our Events</p>
                  <button className="btn register-btn py-2">
                    Click Here
                  </button>
                </div>
                

                <h3 className="fw-bold text-center featured-title" style={{color:'#910B3D'}}>
                  Forthcoming Parichaya Vedhikas
                </h3>
                <img src="/images/tit-bot-bg.png" className="featured-decor" alt="decor-line" />

                <div className="event-card-container">

                {/* Card Box */}
                <div className="event-card shadow-sm">
                <img src="./images/PV_Image.jpeg" alt="Community Event" className="event-img" />

                <div className="event-card-body text-center">
                  <h5 className="fw-bold">Kapu community</h5>
                  <hr />
                  <p className="mb-0">
                    Virtual Parichaya Vedika   
                    <b style={{ color: "#b3b3b3" }}> Price – ₹ 999 + 18% GST</b>
                  </p>
                  <hr />
                  <p className="date-text">
                    This <b>30 November 2025</b>
                  </p>
                </div>
                </div>

      {/* Buy Now Button */}
      <div className="text-center mt-3">
        <button className="btn buy-now-btn px-4 py-2">
            <i className="bi bi-cart-fill me-1"></i>
           Buy Now
        </button>
      </div>

      {/* Description */}
      <p className="text-center mt-4 quote-text">
        “For Our Online Matchmaking service, Join Us Today”
      </p>

      {/* Register For Free */}
      <div className="text-center mt-2 mb-5">
        <button className="btn register-btn px-4 py-2">
          Register For Free
        </button>
      </div>

    </div>
                    <h3 className="fw-bold text-center featured-title" style={{color:'#910B3D'}}>
                      Parichaya Vedhika Photos Gallary
                    </h3>
                    <img src="/images/tit-bot-bg.png" className="featured-decor" alt="decor-line" />








                    <h3 className="fw-bold text-center featured-title" style={{color:'#910B3D'}}>
                      Media Coverage
                    </h3>
                    <img src="/images/tit-bot-bg.png" className="featured-decor" alt="decor-line" />

            </WhiteBox>
            <AppInfoComponent />
        </div>
    )
}