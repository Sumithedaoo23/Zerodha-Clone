import React from "react";

function ProductHero() {
  return (
    <>
      <div className="container" style={{textAlign:'center', marginTop:'100px'}}>
        <h1>Zerodha Products</h1>
        <h4 style={{fontWeight:'normal', marginTop:'15px'}}>Sleek, modern, and intuitive trading platforms</h4>
        <p style={{color:'grey',marginTop:'15px' }}>
          Check out our{" "}
          <a href=" " style={{ textDecoration: "none" }}> investment offerings → </a>
        </p>
      </div>
    </>
  );
}

export default ProductHero;
