import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./profileCssCarousel.css";

export default function ProfileCarousel() {
  const profiles = [
    {
      id: "EP336763",
      caste: "Kamma",
      img: "/images/Apple_Aluminum.icon",
    },
    {
      id: "EP334514",
      caste: "Brahmin",
      img: "/images/Apple_Classic.icon",
    },
    {
      id: "EP335359",
      caste: "Kapu / Naidu / Telugu",
      img: "/images/Apple_Metal.icon",
    },
    {
      id: "EP335999",
      caste: "Reddy",
      img: "/images/Apple512.icon",
    },
    {
      id: "EP336888",
      caste: "Balija",
      img: "/images/Retro_Wood.icon",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
    desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
    tablet: { breakpoint: { max: 992, min: 576 }, items: 2 },
    mobile: { breakpoint: { max: 576, min: 0 }, items: 1 },
  };

  return (
    <div className="featured-section text-center py-5">
      <h3 className="fw-bold featured-title" style={{color:'#910B3D'}}>
        Featured Profile - Telugu Brides & Grooms
      </h3>
      <img src="/images/tit-bot-bg.png" className="featured-decor" 
    alt="decor-line" />

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        arrows={false}
        showDots={false}
        swipeable={true}
        draggable={true}
      >
        {profiles.map((p, index) => (
          <div key={index} className="profile-card text-center">
            <div className="profile-image mx-auto">
              <img src={p.img} alt={p.id} className="img-fluid" />
            </div>
            <p className="mt-3 mb-0">
              <strong>Profile ID:</strong> <span className="text-dark fw-bold">{p.id}</span>
            </p>
            <p className="text-secondary">
              <strong>Caste:</strong> {p.caste}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
