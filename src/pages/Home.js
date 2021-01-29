import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
