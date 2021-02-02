import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { useGlobalContext } from "../components/context";

const Home = () => {
  const { checkColor } = useGlobalContext();
  useEffect(() => {
    checkColor("#e2dff0");
  }, [checkColor]);
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
};

export default Home;
