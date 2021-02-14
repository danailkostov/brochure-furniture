import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import SocialProofs from "../components/SocialProofs";
import Services from "../components/Services";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <SocialProofs />
      <About />
      <Contact />
    </>
  );
};

export default Home;
