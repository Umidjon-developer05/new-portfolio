import React from "react";

import Skills from "@/components/Skills/Skills";
import Navbar from "@/components/shared/Navbar/Navbar";
import Main from "@/components/Main/Main";
import About from "@/components/about/about";
import Portfolio from "@/components/portfolio/portfolio";
import Contact from "@/components/contact/contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{}}>
        <Main />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
