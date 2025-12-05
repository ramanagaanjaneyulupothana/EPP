import React from "react";
import "../eppComponents/whiteBox.css";

export default function WhiteBox({ children }){
  return (
    <div className="white-box-wrapper">
      <div className="white-box">
        {children}
      </div>
    </div>
  );
};

