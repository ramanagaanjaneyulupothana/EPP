import React from "react";
import "./posterCssSection.css";
import RegisterForm from "./registerForm.js";

export function PosterSection() {
  return (
    <div className="poster-container">
      <div className="image-section">
        <img
          src="/images/sub-banner.png"
          alt="Poster"
          className="poster-image"
        />

        {/* Centered registration form (yellow box) */}
        <div className="register-centered">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
