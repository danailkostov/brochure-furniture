import React from "react";
import Hero from "../components/Hero";
import Contact from "./Contact";
import SocialProofs from "./SocialProofs";
import Services from "./Services";
import About from "./About";

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
