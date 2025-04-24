import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Contact from "./components/contact/contact";
import Portfolio from "./components/portfolio/portfolio";
import ScrollSpy from "./components/scrollspy";

export default function App() {
  const [currentSection, setCurrentSection] = useState("hero");
  return (
    <div className="App">
      <Navbar currentSection={currentSection} />
      <ScrollSpy
        sectionIds={["hero", "portfolio", "contact"]}
        onSectionChange={setCurrentSection}
      />
      <Hero/>
      <Portfolio/>
      <Contact/>

    </div>
  );
}
