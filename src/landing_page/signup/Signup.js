import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Signuppng from "../images/signup.png";
import react, { useState } from 'react';

function Signup() {
     const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Open a free demat & trading account online
        </h2>
        <p style={{ textAlign: "center", fontSize: "20px", color: "grey" }}>
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </p>
      </div>

      <div>
        <div className="row">
          <div className="col-6 p-3">
            <img
              style={{ width: "550px", marginLeft: "150px" }}
              src={Signuppng}
            />
          </div>
          <div className="col-6">
            <h2 style={{ marginLeft: "100px", marginTop: "100px" }}>
              Signup now
            </h2>
            <p style={{ marginLeft: "100px" }}>
              Or track your existing application
            </p>
            <InputGroup className="mb-3">
              <input
                style={{
                  width: "70px",
                  height: "60px",
                  backgroundColor: "white",
                  borderRadius: "2px",
                  textAlign: "center",
                  marginLeft: "100px",
                }}
                placeholder="🇮🇳+91"
              />
              <input
                style={{
                  width: "280px",
                  height: "60px",
                  borderColor: "grey",
                  borderRadius: "3px",
                  border: "",
                }}
                type="mobile"
                placeholder=" Enter your mobile number"
              />
              <br></br>
              <div>
                <button
                  style={{
                    width: "280px",
                    height: "50px",
                    borderRadius: "5px",
                    border: "none",
                    color: "white",
                    marginTop: "100px",
                    marginLeft: "-350px",
                    backgroundColor: isHovered ? "grey" : "#4285f8",
                    fontSize: "20px",
                    transition: "background-color 0.1s",
                  }}
                  type="submit"
                  className="otp-btn"
                  
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Get OTP
                </button>
                {/* backgroundColor:'#2f80ed' */}
              </div>
              <p style={{ marginTop: "50px", marginLeft: "50px" }}>
                By proceeding, you agree to the Zerodha{" "}
                <a href=" " style={{ textDecoration: "none" }}>
                  terms & privacy policy
                </a>
              </p>
            </InputGroup>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
