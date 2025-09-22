"use client";
import React, { useRef } from "react";
import HomePage from "../components/routerComponents/Home";
import ContactPage from "../components/routerComponents/Contact";
import SkillsPage from "../components/routerComponents/Skills";
import Title from "../components/utilitiesComponents/Title";
import { Navigation } from "../components/nav";

const Page = () => {
  return (
    <div >
      <Navigation />
      <HomePage />
      <Title title={"My Skills"} />
      <SkillsPage />
      <Title title={"Contact "} />
      <ContactPage />
    </div>
  );
};

export default Page;
