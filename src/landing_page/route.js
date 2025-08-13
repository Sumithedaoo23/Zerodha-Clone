import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from '../landing_page/home/HomePage'
import Signup from '../landing_page/signup/Signup'; 
import AboutPage from '../landing_page/about/AboutPage';
import ProductPage from '../landing_page/product/ProductPage';
import PricingPage from '../landing_page/pricing/PricingPage';
import SupportPage from '../landing_page/support/SupportPage';
import NotFound from "../landing_page/NotFound";
// import NotFound from "./NotFound";

import "bootstrap/dist/css/bootstrap.min.css";
import Navba from "../landing_page/Navbar";
import Footer from "../landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Finalroute() {
  return (
    <BrowserRouter>
      <Navba />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Finalroute;
