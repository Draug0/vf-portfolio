import Head from "next/head";
import React from "react";
import Navbar from "../components/Organism/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Victoria Fernandez Estudio</title>
        <meta name="description" content="Portfolio de Victoria Fernandez" />
      </Head>
      <Navbar />
    </>
  );
}
