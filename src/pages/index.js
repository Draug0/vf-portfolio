import Head from "next/head";
import React from "react";
import Footer from "../components/Organism/Footer/Footer";
import Hero from "../components/Organism/Hero/Hero";
import Information from "../components/Organism/Information/Information";
import Navbar from "../components/Organism/Navbar/Navbar";
import Project from "../components/Organism/Projects/Project";

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
        <Project />
        <Information />
      </main>
      <Footer />
    </>
  );
}
