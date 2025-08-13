import React from "react";
import Ecosystem from "../images/ecosystem.png";
import Arrowpng from "../images/right-arrow.png";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div
          className="col-6 p-5"
          style={{ marginTop: "-550px", marginLeft: "30px" }}
        >
          <h1>Trust with confidence</h1>
          <h2>Customer-first always</h2>
          <p style={{ color: "grey" }}>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6<br></br>
            lakh crores of equity investments and contribute to 15% <br></br>
            of daily retail exchange volumes in India.
          </p>

          <h2>No spam or gimmicks</h2>
          <p style={{ color: "grey" }}>
            No gimmicks, spam, "gamification", or annoying push <br></br>
            notifications. High quality apps that you use at your<br></br> pace,
            the way you like. Our philosophies.
          </p>

          <h2>The Zerodha universe</h2>
          <p style={{ color: "grey" }}>
            Not just an app, but a whole ecosystem. Our investments
            <br></br> in 30+ fintech startups offer you tailored services
            <br></br> specific to your needs.
          </p>

          <h2>Do better with money</h2>
          <p style={{ color: "grey" }}>
            With initiatives like Nudge and Kill Switch, we don't just
            <br></br> facilitate transactions, but actively help you do better
            <br></br> with your money.
          </p>
        </div>
        <div
          className="col-6 p-5"
          style={{ marginLeft: "650px", marginTop: "-700px" }}
        >
          <img src={Ecosystem} alt="Ecosystem" style={{ width: "120%", marginLeft:'-120px' }} />
          <div className="text-center" style={{ marginLeft: "10px" }}>
            <a href="" className="mr-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <img src={Arrowpng} style={{ width: "12px" }} />{" "}
            </a>
            <a href="" style={{ textDecoration: "none", marginLeft: "30px" }}>
              Try Kite demo <img src={Arrowpng} style={{ width: "12px" }} />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
