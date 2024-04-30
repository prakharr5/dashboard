import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <main>
        <div className="left">
          <p>Dashboards</p>
          <div className="boxs">
            <div className="box">
              <i className="fa-regular fa-circle-user"></i>
              Patients
            </div>
            <div className="line"></div>
            <div className="box hr">
              <i className="fa-solid fa-coins"></i>HR
            </div>
            <div className="line"></div>
            <div className="box">
              <i className="fa-solid fa-filter"></i>Labs
            </div>
            <div className="line"></div>
            <div className="box">
              <i className="fa-solid fa-house-chimney-medical"></i>Pharma
            </div>
          </div>
          <p>Processes</p>
          <div className="boxs">
            <div className="box">
              <i className="fa-solid fa-newspaper"></i>Registration
            </div>
            <div className="line"></div>
            <div className="box">
              <i className="fa-regular fa-file-lines"></i>Consultation
            </div>
            <div className="line"></div>
            <div className="box">
              <i className="fa-solid fa-vial"></i>Tests & Reports
            </div>
            <div className="line"></div>
            <div className="box">
              <i className="fa-solid fa-money-bills"></i>Billing
            </div>
          </div>
        </div>
        <div className="right">
          <div className="consul">Consultants</div>
          <div className="filt">f</div>
          <div className="count">
            <div className="boxTwo">Consultant Count</div>
            <div className="boxTwo">Consultations</div>
            <div className="boxTwo">Labs</div>
            <div className="boxTwo">Diet Plans</div>
          </div>
          <div className="tabl">Consultants</div>
        </div>
      </main>
    </>
  );
}

export default Hero;
