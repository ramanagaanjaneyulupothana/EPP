import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
  FaRegCopyright,
} from "react-icons/fa";

export default function FooterComponent() {
  return (
    <footer
      className="text-light pt-5 pb-3"
      style={{ backgroundColor: "#7c0022", width: "100%" }}
    >
      <div className="container-fluid px-5">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <img
              src="/images/logo.png"
              alt="Eenadu Pellipandiri"
              style={{ width: "200px", backgroundColor: "white", borderRadius: "5px" }}
              className="mb-3"
            />
            <p className="small mb-2">
              A Matrimonial service from largest circulated Telugu Daily 'Eenadu'
            </p>
            <p className="fw-bold text-warning">Register For FREE !</p>
            <h6 className="mt-3">Follow us</h6>
            <div className="d-flex gap-3 my-2">
              <FaFacebookF size={22} />
              <FaInstagram size={22} />
              <FaWhatsapp size={22} />
              <FaLinkedinIn size={22} />
              <FaYoutube size={22} />
            </div>
            <button className="btn btn-warning fw-semibold mt-2">
              Visit Pellipandiri Blog
            </button>
          </div>

          {/* Middle Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Helpful Links</h5>
            <hr />
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled small">
                  <li>Contact Us</li>
                  <li>Leave Message</li>
                  <li>Feedback</li>
                  <li>About Us</li>
                  <li>Branches</li>
                  <li>FAQs</li>
                  <li>Events</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled small">
                  <li>Quick Search</li>
                  <li>Packages</li>
                  <li>Disclaimer</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Success Stories</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <hr />
            <p className="small mb-1">
              <strong>Eenadu Pellipandiri</strong>
              <br />
              (A Division of Ushodaya Enterprises Pvt Ltd)
              <br />
              Eenadu Corporate Office, Ramoji Film City,
              <br />
              Anajpur Village, Ranga Reddy Dist, Telangana - 501512
            </p>
            <p className="small mb-1">
              <span className="fw-bold text-warning">Ph:</span> +91 8008001686<br />
              <span className="fw-bold text-warning">+91 8008002165</span>
              <br />
              <small>(Call us between 9AM to 8PM)</small>
            </p>
            <p className="small mb-2">
              <span className="fw-bold text-warning">Email:</span>{" "}
              support@eenadupellipandiri.net
            </p>
            <button
              className="btn btn-success fw-semibold"
              style={{ borderRadius: "10px" }}
            >
              💬 WhatsApp Us!
            </button>
          </div>
        </div>

        {/* Declaration */}
        <div className="border-top pt-3 mt-3 text-center small text-light">
          <strong>Declaration :</strong> This site is strictly for matrimonial
          purposes only and not a dating website and should not be used for posting
          any obscene material.
        </div>

        {/* Bottom Section */}
        <div className="border-top mt-4 pt-3 text-center small">
          <p className="mb-1">
            Online Matrimony Service From{" "}
            <img src="/images/elogowithSun.png" alt="Eenadu"
              style={{ height: "50px", verticalAlign: "middle" }}
            />
          </p>
          <p className="mb-0">A Division of Ushodaya Enterprises Pvt Ltd</p>
          <p className="mt-2 mb-0 small">
            <FaRegCopyright /> 2025 Eenadu Pellipandiri. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
