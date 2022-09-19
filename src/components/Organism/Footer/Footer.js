import React from "react";
import styles from "./footer.module.scss";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiMailLine } from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.socials}>
          <h4>Redes Sociales</h4>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/communitymanager_vf/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:estudiovfuy@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <RiMailLine />
                Correo electrónico
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/victoria-fernandez-4727b81b2/"
                target="_blank"
                rel="noreferrer"
              >
                <GrLinkedinOption />
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.rights}>
          <p>Todos los derechos reservados a Victoria Fernandez</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
