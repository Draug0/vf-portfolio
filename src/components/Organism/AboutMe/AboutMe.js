import { Controller, Scene } from "react-scrollmagic";
import styles from "./aboutme.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.wrapper} id="aboutme">
      <article className="container">
        <h1>SOBRE MI</h1>
        <Controller>
          <Scene
            triggerElement={`.${styles.contentContainer}`}
            triggerHook={0.6}
            reverse={true}
            classToggle={`fade-in`}
          >
            <div className={styles.contentContainer}>
              <div className={styles.imgWrapper} />
              <div className={styles.textContainer}>
                <p>
                  Hola, mi nombre es <strong>Victoria Fernandez</strong> y
                  estudié Community Manager & Publicidad en Coderhouse.
                </p>
                <p>
                  Actualmente me sigo formando en marketing digital porque me
                  apasiona!
                </p>
                <p>
                  <strong>
                    Nuestro trabajo es gestionar y manejar las redes sociales.
                  </strong>
                </p>
                <p>
                  Lograremos llevar tu emprendimiento a otro nivel mediante
                  estrategias de marketing, creando relaciones con los clientes
                  y humanizando la marca.
                </p>
                <p>
                  Con el fin de generar comunidad, atraer clientes potenciales y
                  así aumentar las ventas de tu producto/servicio.
                </p>
                <p>
                  <strong>
                    ¿Preparado/a para llevar tu marca al siguiente nivel?
                  </strong>
                </p>
              </div>
            </div>
          </Scene>
        </Controller>
      </article>
    </section>
  );
};

export default AboutMe;
