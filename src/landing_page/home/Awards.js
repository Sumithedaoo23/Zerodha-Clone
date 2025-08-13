import React from "react";
import largestBroker from "../images/largestBroker.png";
import Pressimage from "../images/pressLogos.png";

function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <img
            src={largestBroker}
            alt="largest image"
            style={{ marginLeft: "100px", marginTop: "40px", display: "flex" }}
          />
        </div>
        <div
          className="col-lg-6 col-sm-6 mt-3"
          style={{ marginLeft: "640px", marginBottom: "500px" }}
        >
          <h1 style={{marginBottom:'-380px'}}></h1>
          <h2 style={{marginBottom:'50px'}}>Largest stock broker in India</h2>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order <br></br> volumes in india daily by trading and investing in:
          </p>
          <div className="row">
            <div
              className="col-6"
              style={{ marginLeft: "10px", marginTop: "40px" }}
            >
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div
              className="col-6"
              style={{ marginLeft: "250px", marginTop: "-113px" }}
            >
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src={Pressimage}
            alt="largest image"
            style={{ marginTop: "50px", width: "80%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
