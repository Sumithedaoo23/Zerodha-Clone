import React from "react";
import Arrowpng from "../images/right-arrow.png";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4" style={{marginLeft:'100px', marginBottom:'-40px'}}>
          <h1 className="mb-3" >Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            <br></br> in india, flat fees and no hidden charges
          </p>
          <a href="" style={{ textDecoration: "none", }}>
            Try Kite demo <img src={Arrowpng} style={{ width: "12px" }} />{" "}
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
            <div className="row" style={{marginLeft:'620px', marginTop:'-130px',width:'500px', height:'150px',border:'solid black 1px'}}>
                <div >
                    <h1 style={{marginLeft:'80px', marginTop:'10px'}}>₹0</h1>
                    <p style={{marginLeft:'20px'}}>Free equity delivery and<br></br> direct mutual funds</p>
                </div>
                <div style={{marginLeft:'170px',marginTop:'-62px', backgroundColor:'black', height:'1px',width:'150px', transform:'rotate(90deg)' }}></div>
                <div>
                    <h1 style={{marginLeft:'320px', marginTop:'-130px'}}>₹20</h1>
                    <p style={{marginLeft:'290px', marginTop:'-2px'}}>Intraday and F&O</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
