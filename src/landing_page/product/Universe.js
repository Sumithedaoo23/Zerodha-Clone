import React from "react";
import ZerodhaFund from "../images/zerodhaFundhouse.png";
import sensibull from "../images/sensibullLogo.png";
import Smallcase from "../images/smallcaseLogo.png";
import Strak from "../images/streakLogo.png";
import Ditto from "../images/dittoLogo.png";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <img style={{ width: "200px" }} src={ZerodhaFund} />
          <p style={{fontSize:'12px',color:'grey', marginTop:'10px'}}>
            Our asset management venture<br></br> that is creating simple and
            transparent index<br></br> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img style={{ width: "200px" }} src={sensibull} />
          <p style={{fontSize:'12px',color:'grey', marginTop:'10px'}}>
            Options trading platform that lets you <br></br>create strategies,
            analyze positions, and examine<br></br> data points like open
            interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img style={{ width: "200px" }} src={Smallcase} />
          <p style={{fontSize:'12px',color:'grey', marginTop:'10px'}}>
            Investment research platform <br></br>that offers detailed insights
            on stocks, sectors,<br></br> supply chains, and more.
          </p>
        </div>
        <div className="row text-center">
          <div className="col-4 p-3">
            <img style={{ width: "200px" }} src={Strak} />
            <p style={{fontSize:'12px',color:'grey', marginTop:'10px'}}>
              Systematic trading platform<br></br>that allows you to create and
              backtest<br></br>strategies without coding
            </p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "200px" }} src={Smallcase} />
            <p style={{fontSize:'12px',color:'grey', marginTop:'10px'}}>
              Thematic investing platform <br></br>that helps you invest in
              diversified<br></br>
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "120px" }} src={Ditto} />
            <p style={{fontSize:'12px', color:'grey', marginTop:'10px'}}>
              Personalized advice on life<br></br> and health insurance. No spam
              <br></br> and no mis-selling. Sign up for free
            </p>
          </div>
        </div>
        <button style={{width:'200px', height:'40px', border:'none', backgroundColor:'#2f80ed', color:'white', marginLeft:'550px',borderRadius:'5px',fontSize:'20px'}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
