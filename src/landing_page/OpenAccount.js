import React from 'react';


function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5 '>
                    <div className='row text-center' style={{textAlign:'center'}}>
                        <h1 className='mt-5' style={{fontSize:'30px'}}>Open a Zerodha account</h1>
                        <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                        {/* <button className='p-3 mb-5 fs-5' style={{width:'18%',height:'45px', margin:'0 auto', justifyContent:'center',textAlign:'center', color:'white', backgroundColor:'#2f80ed', border:'none', fontSize:'19px', }}>Sign up now</button> */}
                        <button style={{width:'20%',height:'45px', margin:'0 auto',color:'white', backgroundColor:'#2f80ed', border:'none'}}>Sign up now</button>
                    </div>
        </div>
     );
}

export default OpenAccount;