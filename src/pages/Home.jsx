import { useState } from "react";
import Header from "../components/home-page/Header";
import SubHeader from "../components/home-page/SubHeader";
import Hero from "../components/home-page/Hero";
import Products from "../components/home-page/Products";
import Footer from "../components/home-page/Footer";

const Home = () => {
  return (
    <div className="bg-white font-serif">
      <SubHeader />
      <Header />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
