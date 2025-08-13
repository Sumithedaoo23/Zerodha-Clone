import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
// import Hero from '../home/Hero';
import ProductHero from './Hero';


function ProductPage() {
    return ( 
        <>
        {/* <h1>hero</h1> */}
        <ProductHero />
        <LeftSection 
        imageURL="../images/kite.png"
        productName=""
        productDescription=""
        tryDemo=""
        learnMore=""
        googlePlay="" 
        appStore="" 
        />
        <RightSection />
        <Universe />
        </>
     )
}

export default ProductPage;