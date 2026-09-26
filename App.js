import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  const [active, setActive] = useState("Home");

  const handleNavigate = (link) => {
    setActive(link);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mv-app">
      <Navbar active={active} onNavigate={handleNavigate} />
      <Hero />
      <Clients />
      <Portfolio />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
