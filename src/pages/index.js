import Head from "next/head";
import React from "react";
import AboutMe from "../components/Organism/AboutMe/AboutMe";
import ContactMe from "../components/Organism/ContactMe/ContactMe";
import Hero from "../components/Organism/Hero/Hero";
import Navbar from "../components/Organism/Navbar/Navbar";
import Services from "../components/Organism/Services/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Victoria Fernandez Estudio</title>
        <meta name="description" content="Portfolio de Victoria Fernandez" />
      </Head>
      <Navbar />
      <main className="container">
        <Hero />
        <AboutMe />
        <Services />
        <ContactMe />
      </main>
    </> 
  );
}
