// import { useState } from "react";

import "./App.module.css";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Judging from "./components/Judging";
import Rules from "./components/Rules";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <Hero />
      <Intro />
      <Rules />
      <Judging />
      <Faq />
      <Timeline />
    </>
  );
}

export default App;
