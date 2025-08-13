import React from 'react';
import homeHero from '../images/homeHero.png'

function Hero() {
    return ( 
        <div className='container p-5 mb-5 '>
            <div className='row text-center' style={{textAlign:'center'}}>
                <img src={homeHero} alt="hero image" style={{width:'100%',  height:'auto'}} className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button style={{width:'20%',height:'45px', margin:'0 auto',color:'white', backgroundColor:'#2f80ed', border:'none'}}>Sign up now</button>
            </div>
        </div>
     );
}

export default Hero;