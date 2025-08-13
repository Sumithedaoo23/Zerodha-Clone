import React from "react";
import Educations from "../images/education.png";
import Arrowpng from "../images/right-arrow.png";

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={Educations}
            alt="education"
            style={{ width: "60%", marginTop: "130px", marginLeft: "140px", marginBottom:'50px' }}
          />
        </div>
        <div className="col-6" style={{marginLeft:'650px', marginTop:'-350px',}}>
          <h1 style={{marginBottom:'50px'}}>Free and open market education</h1>
          <p style={{marginBottom:'30px'}}>
            Varasiity, the largest online stock market education book in
            <br></br> the world covering everything from the basics to advanced
            trading.
          </p>
          <a href="" style={{ textDecoration: "none", }}>
            Versity <img src={Arrowpng} style={{ width: "12px" }} />
          </a>

          <p style={{margintop:'150px'}}>
            TradingQ&A, the most active trading and investment <br></br>
            market related queries
          </p>
          <a href="" style={{ textDecoration: "none"}}>
            TradingQ&A <img src={Arrowpng} style={{ width: "12px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
