import { useState } from "react";
import "./GradientCheckbox.css";
//import "./GradientCheckbox.css"; // custom gradient style
export default function LoginForm(){
    const [showPassword, setShowPassword] = useState(false);
    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{ width: "350px", borderRadius: "12px" }}>
        <div className="text-center mb-3">
          <img src="/images/logo.png" alt="Logo" className="img-fluid mb-2" />
        </div>
        <h5 className="text-center mb-3 fw-bold">LOGIN</h5>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Profile ID / Mobile" />
        </div>
        <div className="mb-2">
          <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Enter Password" />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          
          <div className="form-check">
            <input className="form-check-input gradient-checkbox" type="checkbox" id="showPassword" 
              onChange={() => setShowPassword(!showPassword)} />
          
            <label className="form-check-label small" htmlFor="showPassword">
              Show Password
            </label>
          </div>
          <a href="#" className="small text-primary text-decoration-none">
            Forgot Password?
          </a>
        </div>

        <button className="btn text-white w-100 mb-2 fw-semibold" style={{ backgroundColor: "#910B3D" }}>
          Sign In
        </button>

        <div className="text-center mb-2">OR</div>

        <button className="btn text-white w-100 fw-semibold" style={{ backgroundColor: "#910B3D", borderColor: "#800000" }}>
          Request OTP
        </button>

        <div className="text-center mt-3">
          <span className="small">Not Yet Registered?</span>{" "}
          <a href="#" className=" fw-bold text-decoration-none" style={{ color: "#910B3D" }}>
            Register Now
          </a>
        </div>
      </div>
    </div>
  
    )
}