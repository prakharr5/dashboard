import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="middle">
          <div className="search">
            <input type="dropdown" placeholder="Patients" />
            <input type="search" placeholder="Search" />
          </div>
          <div className="addNew">
            <button>Add New</button>
          </div>
        </div>
        <div className="profile">
          <div className="info"></div>
          <div className="acc"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
