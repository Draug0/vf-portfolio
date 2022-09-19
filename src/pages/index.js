import Head from "next/head";
import React from "react";
import AboutMe from "../components/Organism/AboutMe/AboutMe";
import ContactMe from "../components/Organism/ContactMe/ContactMe";
import Hero from "../components/Organism/Hero/Hero";
import Navbar from "../components/Organism/Navbar/Navbar";
import Services from "../components/Organism/Services/Services";
import Project from "../components/Organism/Projects/Project";
import Information from "../components/Organism/Information/Information";
import Footer from "../components/Organism/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Victoria Fernandez Estudio</title>
        <meta name="description" content="Portfolio de Victoria Fernandez" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <Project />
        <ContactMe />
        <Information />
      </main>
      <Footer />
    </>
  );
}
