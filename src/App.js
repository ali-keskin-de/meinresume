import React from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Disclaimer from "./components/footer/disclaimer";
import Footer from "./components/footer/footer";
import TermsPolicys from "./components/footer/terms-policys";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Resume from "./components/resume/resume";
import Services from "./components/service/services";

const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Services />
      <Resume/>
      <Contact/>
      <Footer/>
      <TermsPolicys/>
      <Disclaimer/>
    </>
  );
};

export default App;
