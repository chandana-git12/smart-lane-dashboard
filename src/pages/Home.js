import React from "react";
import SolarChatbot from './SolarChatbot';
import Hero from "./Hero";

import Gallery from "./Gallery";
import Service from "./Service";
import Choose from "./Choose";
import Clients from './Clients'; 


const Home = () => {
  return (
    <>
     <SolarChatbot />
      <Hero />
      <Gallery/>
      <Service />
      <Choose />
     <Clients />
    </>
  );
};

export default Home;