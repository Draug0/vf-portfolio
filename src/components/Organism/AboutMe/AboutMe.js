import { TitleSection, BoldSpan } from "../../../styled-component/styles";
import {
  AboutMeContainer,
  AboutMePhoto,
  AboutMeContainerContent,
  AboutMeParagraph,
  AboutMeParagraphContainer,
} from "./AboutMeStyles";
import Image from "next/image";
import Photo from "../../../images/VictoriaPhoto2.jpeg";
import styles from "./aboutme.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.wrapper} id="aboutme">
      <article className="container">
        <h1>SOBRE MI</h1>
        <div className={styles.contentContainer}>
          <div className={styles.imgWrapper}>
            <Image src={Photo} alt="Imagen" />
          </div>
          <div className={styles.textContainer}>
            <p>
              Hola, mi nombre es Victoria Fernandez y estudié Community Manager
              & Publicidad en Coderhouse.
            </p>
            <p>
              Actualmente me sigo formando en marketing digital porque me
              apasiona!
            </p>
            <p>Nuestro trabajo es gestionar y manejar las redes sociales.</p>
            <p>
              Lograremos llevar tu emprendimiento a otro nivel mediante
              estrategias de marketing, creando relaciones con los clientes y
              humanizando la marca.
            </p>
            <p>
              Con el fin de generar comunidad, atraer clientes potenciales y así
              aumentar las ventas de tu producto/servicio.
            </p>
            <p>
              <strong>
                ¿Preparado/a para llevar tu marca al siguiente nivel?
              </strong>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
