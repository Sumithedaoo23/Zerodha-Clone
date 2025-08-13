import React from "react";
import Founder from "../images/nithinKamath.jpg";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top">
        <h1 className=" mt-5 text-center">People</h1>
      </div>

      <div
        className="row p-5 mt-5 text-muted"
        style={{ lineHeight: "1.8" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            style={{ borderRadius: "100%", width: "60%", marginLeft: "50px",marginTop:"-70px" }}
            src={Founder}
            alt="Founder img"
          />
          <h4 style={{marginLeft: "50px", }}>Nithin kamath</h4>
          <h5 style={{marginLeft: "40px", }}>Founder, CEO</h5>
        </div>
        <div className="col-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br></br> hurdles he faced during his decade long stint as a trader. Today,<br></br> Zerodha has changed the landscape of the Indian broking industry..
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee <br></br> (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>
            Connect on src  <a href=" " style={{textDecoration:'none'}}>Homepage / TradingQnA / Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
