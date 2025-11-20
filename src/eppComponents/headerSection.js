import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./headerCssSection.css";
import { FaPhoneAlt, FaMobileAlt, FaFacebookF, FaRegCommentDots, FaLanguage, FaLock } from "react-icons/fa";
import LoginForm from "./loginForm";



export default function HeaderSection() {

  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);


  return (
    <div className="header-section bg-white shadow-sm border-bottom">
      <Container fluid className="d-flex justify-content-between align-items-center">
      <div className="header-content d-flex justify-content-between align-items-center px-3">
        
        
        {/* Left Logo */}
        <img src="/images/logo.png" alt="Eenadu Pellipandiri Logo" className="ps-5 header-logo" 
        />

        {/* Center Links */}
        <div className="d-flex align-items-center gap-4">
           {/* Phone */}
          <a href="tel:+918008001686" className="header-link text-center text-decoration-none">
             <FaPhoneAlt className="header-icon text-dark mb-1" />
              <div className="text-danger fw-bold">+91 8008001686</div>
          </a>


          {/* App Download */}
          <a href="#" className="header-link text-center text-decoration-none">
            <FaMobileAlt className="header-icon text-dark mb-1" />
            <div className="text-dark fw-bold">App Download</div>
          </a>

          {/* Follow Us */}
          <a href="#" className="header-link text-center text-decoration-none">
            <FaFacebookF className="header-icon text-dark mb-1" />
            <div className="text-dark fw-bold">Follow Us</div>
          </a>

          {/* Leave Message */}
          <a href="#" className="header-link text-center text-decoration-none">
            <FaRegCommentDots className="header-icon text-dark mb-1" />
            <div className="text-dark fw-bold">Leave Message</div>
          </a>

        
         {/* Language */}
          <a href="#" className="header-link text-center text-decoration-none">
           {/* <FaLanguage className="header-icon text-dark mb-1" />*/}
           <img src="/images/translate.jpg" />
            <div className="text-dark fw-bold">Language</div>
          </a>
        </div>


        {/* Login Button */}
        <button onClick={openLogin}
          className="login-btn btn rounded-pill fw-bold text-white d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "#910B3D" }} > <FaLock className="mb-1" />
          <span style={{ fontSize: "0.8rem" }}>Login</span>
        </button>

        {/* Popup Modal */}
        {showLogin && (
          <div  className="modal-overlay" onClick={closeLogin}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "120vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              backdropFilter: "blur(2px)", // soft blur effect behind popup
            }}
          >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              background: "transparent", // no background
            }}
          >
            <button onClick={closeLogin}
              style={{
                float: "right",
                border: "none",
                background: "transparent",
                fontSize: "1.9rem",
                cursor: "pointer",
                color: "white",
                top: "-10px",     // small offset above your LoginForm
                right: "-10px",   // small offset outside right edge
                lineHeight: "1",
              }}
            >
              ×
            </button>

            <LoginForm /> {/* Your login form component */}
          </div>
        </div>
      )}
      </div>
      </Container>
    </div>
   
  );
}