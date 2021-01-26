import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
