import React from "react";
import Hero from "../components/Hero";
import Contact from "./Contact";
import SocialProofs from "./SocialProofs";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <SocialProofs />
      <Contact />
    </>
  );
};

export default Home;
