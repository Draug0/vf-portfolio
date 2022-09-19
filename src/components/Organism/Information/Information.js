import React from "react";
import styles from "./information.module.scss";
import heart from "../../../images/Redes.svg";
import Image from "next/image";

const Information = () => {
  return (
    <section id="information" className={styles.wrapper}>
      <article className="container">
        <div className={styles.content}>
          <h1>INFORMACIÓN</h1>
          <h3>
            ¿Por qué tu emprendimiento necesita un Community Manager (CM)?
          </h3>
          <ul>
            <li>
              <span>
                <Image src={heart} alt="heart" width={24} height={24} />
              </span>
              <p>El CM crea y gestiona una identidad y comunidad digital.</p>
            </li>
            <li>
              <span>
                <Image src={heart} alt="heart" />
              </span>
              <p>
                Escucha cuáles son las necesidades de los usuarios para saber
                que quieren y así llegar a construir una relación más cercana
                con el.
              </p>
            </li>
            <li>
              <span>
                <Image src={heart} alt="heart" />
              </span>
              <p>Investiga y analiza la competencia.</p>
            </li>
            <li>
              <span>
                <Image src={heart} alt="heart" />
              </span>
              <p>Planifica un plan de contenidos.</p>
            </li>
            <li>
              <span>
                <Image src={heart} alt="heart" />
              </span>
              <p>
                Redacta cada publicación con una estrategia de hashtag y de
                manera atractiva para el cliente
              </p>
            </li>
            <li>
              <span>
                <Image src={heart} alt="heart" />
              </span>
              <p>Gestiona situaciones de crisis y reputación online</p>
            </li>
            <li>
              <span>
                <Image src={heart} alt="heart" />
              </span>
              <p>Analiza las nuevas tendencias para incorporar al contenido.</p>
            </li>
            <li>
              <span>
                <Image src={heart} alt="heart" />
              </span>
              <p>
                Acorta el tiempo de respuesta de comentarios y mensajes de los
                usuarios
              </p>
            </li>
          </ul>

          <h3>Algunos tips para ganarle al algoritmo de instagram</h3>
          <ul>
            <li>
              <span>
                <Image src={heart} alt="heart" width={24} height={24} />
              </span>
              <p>
                Dedica tiempo diario para interactuar y darle uso a la cuenta
              </p>
            </li>
            <li>
              <span>
                <Image src={heart} alt="heart" />
              </span>
              <p>Añade la ubicación a tus publicaciones</p>
            </li>
            <li>
              <span>
                <Image src={heart} alt="heart" />
              </span>
              <p>Escribe no más de 4 o 5 hashtag relacionados a tu contenido</p>
            </li>
            <li>
              <span>
                <Image src={heart} alt="heart" />
              </span>
              <p>Publica contenido que pueda ser compartido o guardado</p>
            </li>
            <li>
              <span>
                <Image src={heart} alt="heart" />
              </span>
              <p>Crea reels con audios que estén en tendencia</p>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Information;
