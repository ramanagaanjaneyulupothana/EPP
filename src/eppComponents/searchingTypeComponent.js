import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchingTypeComponent(){
  const data = {
    Religion: ["Hindu", "Christian", "Muslim", "Others"],
    Caste: ["Kamma", "Kapu", "Padmashali", "Reddy", "Brahmin", "Arya Vysya", "Mudiraj", "Yadava", "Mala", "Other Castes"],
    Region: ["Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Other States", "USA", "Canada", "Australia", "Other Countries"],
    Profession: ["IT & Software", "Business", "Government Employee", "Doctor", "Police", "Teacher", "Banker", "Accountant", "Lawyer", "Other Professions"],
    Qualification: ["B.Tech", "MBA", "Degree", "M.Tech", "MCA", "MS/MD", "MBBS / BDS", "Post Graduation", "M.Pharmacy", "CA", "Other Qualifications"],
    "City / District": ["Hyderabad", "Vijayawada", "Visakhapatnam", "Tirupati", "Rajamahendravaram", "Guntur", "Khammam", "Warangal", "Bengaluru", "Chennai", "Other Cities"],
  };

  const sectionLabelStyle = {
    backgroundColor: "#a51c4d",
    color: "white",
    borderRadius: "20px",
    padding: "5px 12px",
    fontWeight: "500",
    fontSize: "14px",
    marginRight: "10px",
  };

  return (
    <div className="w-100" style={{ backgroundColor: "#fce4e4", borderRadius: "0px" }}>
      <div className="text-center py-4" style={{ margin: "0", padding: "0 0" }}>
        <h4 className="fw-bold mb-4 text-decoration-underline">Browse Matrimonial Profiles By</h4>

        {Object.entries(data).map(([section, items]) => (
          <div key={section} className="mb-3">
            <div className="d-flex align-items-center justify-content-center flex-wrap mb-2">
              <span style={sectionLabelStyle}>{section}:</span>
              <div>
                {items.map((item, index) => (
                  <span key={index} className="mx-2 text-dark">
                    {item}
                    {index !== items.length - 1 && " | "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


