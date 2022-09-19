import Image from "next/image";
import React from "react";
import styles from "./projects.module.scss";
import AltoAmor from "../../../images/AltoAmor.png";
import Projectimages from "../../Molecules/ProjectImages/Projectimages";

const Project = () => {
  return (
    <section className={styles.wrapper} id="projects">
      <article className="container">
        <div className={styles.content}>
          <h1>TRABAJOS</h1>
          <div className={styles.contentGrid}>
            <h2>Alto Amor - Tienda de indumentaria femenina</h2>
            <div>
              <Image
                src={AltoAmor}
                alt="Alto Amor logo"
                height={200}
                width={200}
              />
            </div>
            <p>
              Alto Amor es una tienda de indumentaria femenina cómoda y canchera
              que se caracteriza por incluir pequeños mensajes relacionados a la
              importancia de cuidar nuestra salud mental. Tiene el objetivo de
              que sean prendas versátiles, pudiendo ser usadas tanto para estar
              en casa, irte de viaje, merendar con amigas o salir de noche.
            </p>
          </div>
          <h3>Servicios brindados</h3>
          <div className={styles.servicesContainer}>
            <div className={styles.service}>Facebook Ads</div>
            <div className={styles.service}>Google Ads</div>
            <div className={styles.service}>Instagram Ads</div>
            <div className={styles.service}>Estrategia de contenido</div>
            <div className={styles.service}>Calendario de contenido</div>
            <div className={styles.service}>Redacción de copys</div>
          </div>
        </div>
        <Projectimages />
      </article>
    </section>
  );
};

export default Project;
