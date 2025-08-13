import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Opening() {
  return (
    <>
      {/* <h1>Opening</h1> */}
      <div className="row" style={{ backgroundColor: "#2f80ed" }}>
        <div className="col-6 p-3">
          <h4
            style={{ color: "white", marginLeft: "150px", marginTop: "50px" }}
          >
            Support Portal
          </h4>
          <h4
            style={{ marginLeft: "150px", marginTop: "50px", color: "white" }}
          >
            Search for an answer or browse help topics to create a<br></br>{" "}
            ticket
          </h4>
          <InputGroup
            className="mb-4 mt-4"
            style={{ width: "550px", marginLeft: "150px" }}
          >
            <Form.Control
              placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">search</InputGroup.Text>
          </InputGroup>
          <p>
            <a
              href=" "
              style={{
                marginLeft: "150px",
                paddingRight: "5px",
                fontSize: "18px",
                color: "white",
              }}
            >
              Track account opening
            </a>{" "}
            <a
              href=""
              style={{ paddingRight: "10px", fontSize: "18px", color: "white" }}
            >
              Track segment activation
            </a>{" "}
            <a
              href=""
              style={{ paddingRight: "50px", fontSize: "18px", color: "white" }}
            >
              Intraday margins
            </a>
          </p>
          <p>
            <a
              href=" "
              style={{
                marginLeft: "150px",
                paddingRight: "50px",
                fontSize: "18px",
                color: "white",
              }}
            >
              Kite user manual
            </a>{" "}
          </p>
        </div>
        <div className="col-6">
          <p
            style={{
              marginTop: "70px",
              marginLeft: "450px",
              fontSize: "18px",
              color: "white",
            }}
          >
            <a
              href=" "
              style={{
                color: "white",
              }}
            >
              Track tickets
            </a>
          </p>
          <h4 style={{color:'white',marginLeft:'50px',marginTop:'90px'}}>Featured</h4>
          <p><a href=" " style={{color:'white', marginLeft:'90px',fontSize:'18px'}}>1. Surveillance measure on scrips - June 2025</a></p>
          <p><a href=" " style={{color:'white', marginLeft:'90px',fontSize:'18px'}}>2. Latest Intraday leverages and Square-off timings</a></p>
        </div>
      </div>
    </>
  );
}

export default Opening;
