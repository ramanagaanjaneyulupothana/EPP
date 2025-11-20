import React from "react";

export default function RegisterNowFormByFinal() {
  return (
    <div className="container-fluid py-4" style={{ backgroundColor: "#F5B70A" }}>
      <div className="text-center mb-3">
        <h5 className="fw-bold text-danger">
          A Soulful Platform For Telugu Marriage Introductions
          <span className="fw-bold text-decoration-none" style={{Color: "maroon"}}>-</span>Find Your Perfect Partner From Thousands Of Genuine Matches
        </h5>
      </div>

      <div className="card border-0 shadow-sm p-4 mx-auto" style={{ maxWidth: "1000px", borderRadius: "10px" }}>
        {/* Navigation Tabs */}
        <div className="d-flex justify-content mb-4">
          <button className="btn btn-warning me-2 fw-semibold px-4" style={{color:"maroon"}}>Quick Search</button>
          <button className="btn text-white fw-semibold px-4" style={{backgroundColor:"maroon"}}>Free Registration</button>
        </div>

        {/* Form Section */}
        <form className="row g-3 justify-content align-items-end">
          {/* Name */}
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name *"
              required
            />
          </div>

          {/* Gender */}
          <div className="col-md-2 d-flex justify-content-around">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
              />
              <label className="form-check-label" htmlFor="male">
                <i className="bi bi-person"></i>
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
              />
              <label className="form-check-label" htmlFor="female">
                <i className="bi bi-person-fill"></i>
              </label>
            </div>
          </div>

          {/* DOB */}
          <div className="col-md-3 d-flex">
            <select className="form-select me-2">
              <option>Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>

            <select className="form-select me-2">
              <option>Mon</option>
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>

            <select className="form-select">
              <option>Year</option>
              {Array.from({ length: 50 }, (_, i) => (
                <option key={i}>{1975 + i}</option>
              ))}
            </select>
          </div>

          {/* Religion */}
          <div className="col-md-3">
            <select className="form-select" required>
              <option value="">Religion *</option>
              <option>Hindu</option>
              <option>Christian</option>
              <option>Muslim</option>
              <option>Other</option>
            </select>
          </div>

          {/* Caste */}
          <div className="col-md-3">
            <select className="form-select" required>
              <option value="">Caste *</option>
              <option>OC</option>
              <option>BC</option>
              <option>SC</option>
              <option>ST</option>
            </select>
          </div>

          {/* Mobile Number */}
          <div className="col-md-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile No *"
              required
            />
          </div>





          {/* Email */}
          <div className="col-md-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-md-3 text-center">
            <button className="btn text-white w-100 fw-semibold" type="submit" style={{backgroundColor:"maroon"}}>
              <i className="bi bi-person-plus-fill me-2"></i> Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

