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
          <div className="consul">
            <i className="fa-solid fa-users"></i>Consultants
          </div>
          <div className="filt">
            Filters
            <input type="dropdown" placeholder="Select Range" />
            <input type="radio" id="sum" />
            <label htmlFor="sum">Summary</label>
            <input type="radio" id="branch" />
            <label htmlFor="branch">Branch Wise</label>
          </div>
          <div className="count">
            <div className="boxTwo">
              <div className="content">
                Consultant Count <br /> <b>90/900</b> <br /> Today/Period
              </div>
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="boxTwo">
              <div className="content">
                Consultations
                <br /> <b>11/25</b> <br /> Today/Period
              </div>
              <i className="fa-solid fa-file-lines"></i>
            </div>
            <div className="boxTwo">
              <div className="content">
                Labs
                <br /> <b>25/560</b> <br /> Today/Period
              </div>
              <i className="fa-solid fa-money-bill"></i>
            </div>
            <div className="boxTwo">
              <div className="content">
                Diet Plan
                <br /> <b>25/250</b> <br /> Today/Period
              </div>
              <i className="fa-solid fa-money-bill"></i>
            </div>
          </div>
          <div className="tabl">
            <div className="head">
              Consultants
              <div className="back">
                <i className="fa-solid fa-arrow-rotate-right"></i>
                <i className="fa-solid fa-arrow-down"></i>
              </div>
            </div>
            <table>
              <tr>
                <th>NAME</th>
                <th>PATIENT COUNT</th>
                <th>LABS</th>
                <th>DIET PLANS</th>
              </tr>
              <tr>
                <td>John Smith</td>
                <td>12</td>
                <td>3</td>
                <td>6</td>
              </tr>
              <tr>
                <td>John Smith</td>
                <td>12</td>
                <td>3</td>
                <td>6</td>
              </tr>
              <tr>
                <td>John Smith</td>
                <td>12</td>
                <td>3</td>
                <td>6</td>
              </tr>
              <tr>
                <td>John Smith</td>
                <td>12</td>
                <td>3</td>
                <td>6</td>
              </tr>
              <tr>
                <td>John Smith</td>
                <td>12</td>
                <td>3</td>
                <td>6</td>
              </tr>
              <tr>
                <td>John Smith</td>
                <td>12</td>
                <td>3</td>
                <td>6</td>
              </tr>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
