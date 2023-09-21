// import { useState } from "react";

import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Judging from "./components/Judging";
import Partners from "./components/Partners";
import Privacy from "./components/Privacy";
import Prizes from "./components/Prizes";
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
      <Prizes />
      <Partners />
      <Privacy />
    </>
  );
}

export default App;
