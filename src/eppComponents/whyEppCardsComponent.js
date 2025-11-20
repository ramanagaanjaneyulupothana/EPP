import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./whyEppCardsComponent.css"; // for minimal flip animation
import "./profileCssCarousel.css";

const cardData = [
  {
    id: 1,
    img: "/images/elogowithSun.png", // replace with actual path
    frontText: "50 years of Eenadu Brand Legacy and Trust",
    backText: "Largest cir",
  },
  {
    id: 2,
    icon: "/images/icon-events.svg",
    frontText: "Exclusive Parichaya Vedika Events",
    backText: "Special meet-and-greet events for verified members.",
  },
  {
    id: 3,
    icon: "/images/icon-verified.svg",
    frontText: "High Verified Profiles with Highest Success Rate of matchmaking",
    backText: "Ensuring genuine profiles for the best matches.",
  },
  {
    id: 4,
    icon: "/images/icon-money.svg",
    frontText: "Affordable Packages with Dedicated Personalized Services",
    backText: "Choose from tailored plans that suit your needs.",
  },
  {
    id: 5,
    icon: "/images/icon-lock.svg",
    frontText: "Secure & Confidential",
    backText: "Your privacy and safety are our top priorities.",
  },
  {
    id: 6,
    icon: "/images/icon-phone.svg",
    frontText: "Offline Centers Support",
    backText: "Get local assistance from our nationwide centers.",
  },
];

export default function WhyEppCardsComponent() {
  return (
    <div className="why-epp-container container featured-section">
      <h3 className="fw-bold text-center featured-title title-heading">
        Why Eenadu Pellipandiri ?
      </h3>
      <img src="/images/tit-bot-bg.png" className="featured-decor" 
      alt="decor-line" />

      <div className="row g-4 justify-content-center">
        {cardData.map((card) => (
          <div key={card.id} className="col-md-4 d-flex justify-content-center">
            <div className="flip-card">
              <div className="flip-card-inner">

                {/* Front */}
                <div className="flip-card-front card-front shadow-sm">
                  {card.img ? (
                    <img src={card.img} className="card-img" alt="logo" />
                  ) : (
                    <img src={card.icon} className="card-icon" alt="icon" />
                  )}
                  <p className="card-text">{card.frontText}</p>
                </div>

                {/* Back */}
                <div className="flip-card-back card-back">
                  <p>{card.backText}</p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}