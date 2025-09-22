"use client";
import React, { useRef } from "react";
import HomePage from "../components/routerComponents/Home";
import ContactPage from "../components/routerComponents/Contact";
import SkillsPage from "../components/routerComponents/Skills";
import Title from "../components/utilitiesComponents/Title";
import { Navigation } from "../components/nav";
import  Footer  from "../components/Footer";
import Particles from "../components/particles";

const Page = () => {
  return (
    <div>
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <HomePage />
      <Title title={"MY SKILLS"} />
      <SkillsPage />
      <Title title={"CONTACT "} />
      <ContactPage />
      <Footer/>
    </div>
  );
};

export default Page;
