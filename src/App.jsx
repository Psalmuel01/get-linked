// import { useState } from "react";

import "./App.module.css";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Judging from "./components/Judging";
import Rules from "./components/Rules";

function App() {
  return (
    <>
      <Hero />
      <Intro />
      <Rules />
      <Judging />
    </>
  );
}

export default App;
