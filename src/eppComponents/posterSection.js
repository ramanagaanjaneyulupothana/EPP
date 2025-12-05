import React from "react";
import "./posterCssSection.css";
import RegisterForm from "./registerForm.js";
import { useLocation } from "react-router-dom";

export function PosterSection() {
  const location = useLocation();

  // show register form only on home page
  const isHomePage = location.pathname === "/";

  return (
    <div className="poster-container">
      <div className="image-section">
        <img
          src="/images/sub-banner.png"
          alt="Poster"
          className="poster-image"
        />

        {/* Centered registration form (yellow box) */}
        {/* show register form only on home page */}
        {isHomePage && (
        <div className="register-centered">
          <RegisterForm />
        </div>
        )}
      </div>
    </div>
  );
}
