import React from 'react';
import Zeroimg from '../images/pricing0.png' 
import twentyimg from '../images/intradayTrades.png' 


function Hero() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 border-bottom text-center">
                <h1>Pricing</h1>
                <h3 style={{fontWeight:'normal',color:'grey'}}>Free equity investments and flat ₹20 trade and F&O trades</h3>
            </div>
            <div className="row p-5 mt-5">
                <div className="col-4 p-5">
                    <img style={{width:'300px'}} src={Zeroimg}/>
                    <h3 style={{textAlign:'center'}}>Free equity delivery</h3>
                    <p style={{textAlign:'center'}}>All equity delivery investments (NSE, BSE),<br></br> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img style={{width:'300px'}} src={twentyimg}/>
                    <h3 style={{textAlign:'center'}}>Intraday and F&O trades</h3>
                    <p style={{textAlign:'center'}}>Flat ₹ 20 or 0.03% (whichever is lower) per<br></br> executed order on intraday trades across<br></br> equity, currency, and commodity trades. <br></br>Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img style={{width:'300px'}} src={Zeroimg} />
                    <h3 style={{textAlign:'center'}}>Free direct MF</h3>
                    <p style={{textAlign:'center', color:'grey'}}>All direct mutual fund investments are <br></br>absolutely free — ₹ 0 commissions & DP<br></br> charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;