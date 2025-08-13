import React from "react";
import Googleimg from "../images/googlePlayBadge.png";
import Appstore from "../images/appstoreBadge.png";
import Imageurl from "../images/kite.png";
import Consoleimg from "../images/console.png";
import Coinimg from "../images/coin.png";
import ConnectAPI from "../images/kiteconnect.png";
import Varsityimg from "../images/varsity.png";

function LeftSection() {
  return (
    <div className="conatainer">
      <div className="row">
        <div className="col-6 p-3">
          <img style={{ marginLeft: "200px" }} src={Imageurl} />
        </div>
        <div className="col-6">
          <h1 style={{ marginLeft: "100px" }}>Kite</h1>
          <p style={{ marginLeft: "100px" }}>
            Our ultra-fast flagship trading platform with <br></br>streaming
            market data, advanced charts, an<br></br> elegant UI, and more.
            Enjoy the Kite<br></br> experience seamlessly on your Android and
            <br></br> iOS devices.
          </p>
          <div>
            <a href=" " style={{ textDecoration: "none", marginLeft: "100px" }}>
              Try Demo →{" "}
            </a>
            <a
              href=" "
              style={{ textDecoration: "none", marginLeft: "145 px" }}
            >
              Learn More →
            </a>
          </div>
          <div>
            <a>
              <img
                style={{ marginLeft: "100px", marginTop: "15px" }}
                src={Googleimg}
              />
            </a>
            <a>
              <img
                style={{ marginLeft: "100px", marginTop: "15px" }}
                src={Appstore}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6 p-3">
          <h1 style={{ marginLeft: "280px", marginTop: "150px" }}>Console</h1>
          <p style={{ marginLeft: "280px" }}>
            The central dashboard for your Zerodha <br></br> account. Gain
            insights into your trades and <br></br> investments with in-depth
            reports and <br></br>visualisations.
          </p>
          <div>
            <a href=" " style={{ textDecoration: "none", marginLeft: "280px" }}>
              Learn more→{" "}
            </a>
          </div>

          <div className="col-6 ">
            <img
              style={{ marginLeft: "700px", marginTop: "-400px" }}
              src={Consoleimg}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6 p-3">
          <img style={{ marginLeft: "200px" }} src={Coinimg} />
        </div>
        <div className="col-6">
          <h1 style={{ marginLeft: "100px", marginTop: "100px" }}>Coin</h1>
          <p style={{ marginLeft: "100px" }}>
            Buy direct mutual funds online, commission-<br></br>free, delivered
            directly to your Demat<br></br> account. Enjoy the investment
            experience<br></br> on your Android and iOS devices.
          </p>
          <div>
            <a href=" " style={{ textDecoration: "none", marginLeft: "100px" }}>
              Coin →{" "}
            </a>
          </div>
          <div>
            <a>
              <img
                style={{ marginLeft: "100px", marginTop: "15px" }}
                src={Googleimg}
              />
            </a>
            <a>
              <img
                style={{ marginLeft: "70px", marginTop: "15px" }}
                src={Appstore}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <h1 style={{ marginLeft: "280px", marginTop: "130px" }}>
            Kite Connect API
          </h1>
          <p style={{ marginLeft: "280px" }}>
            Build powerful trading platforms and<br></br> experiences with our
            super simple<br></br> HTTP/JSON APIs. If you are a startup, build{" "}
            <br></br>your investment app and showcase it to our<br></br>{" "}
            clientbase.
          </p>
          <div>
            <a href=" " style={{ textDecoration: "none", marginLeft: "280px" }}>
              Kite Connect →{" "}
            </a>
          </div>
          <div className="col-6 p-3">
            <img
              style={{ marginLeft: "700px", marginTop: "-320px" }}
              src={ConnectAPI}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6 p-3">
          <img style={{ marginLeft: "200px" }} src={Varsityimg} />
        </div>
        <div className="col-6">
          <h1 style={{ marginLeft: "100px", marginTop: "100px" }}>
            Varsity mobile
          </h1>
          <p style={{ marginLeft: "100px" }}>
            An easy to grasp, collection of stock market <br></br> lessons with
            in-depth coverage and <br></br> illustrations. Content is broken
            down into <br></br>bite-size cards to help you learn on the go.
          </p>

          <div>
            <a>
              <img
                style={{ marginLeft: "100px", marginTop: "15px" }}
                src={Googleimg}
              />
            </a>
            <a>
              <img
                style={{ marginLeft: "70px", marginTop: "15px" }}
                src={Appstore}
              />
            </a>
          </div>
        </div>
        <h4 style={{textAlign:'center', marginTop:'100px',fontSize:'22px', fontWeight:'normal'}}>Want to know more about our technology stack? Check out the<a href="" style={{textDecoration:'none'}}>Zerodha.tech</a> blog.</h4>
      </div>
    </div>
  );
}

export default LeftSection;
