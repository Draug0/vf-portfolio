import React, { useState } from "react";
import Logo from "../../../images/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiMailLine } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <div
            className={active ? styles.navbarBurgerActive : styles.navbarBurger}
            onClick={handleClick}
            role="button"
            tabIndex={0}
          >
            <span />
            <span />
            <span />
          </div>
          <div className={styles.logoContainer}>
            <div className={styles.imgContainer}>
              <Image src={Logo} alt="Main logo" priority placeholder="blur" />
            </div>
            <p>ESTUDIO</p>
          </div>
          <div className={active ? styles.navItemsActive : styles.navItems}>
            <a className={styles.item} href="#aboutme">
              SOBRE MI
              <span />
            </a>
            <a className={styles.item} href="#services">
              SERVICIOS
              <span />
            </a>
            <a className={styles.item} href="#projects">
              TRABAJOS
              <span />
            </a>
            <a className={styles.item} href="#contactme">
              CONTACTO
              <span />
            </a>
            <a className={styles.item} href="#information">
              INFORMACIÓN
              <span />
            </a>
          </div>
          <div className={styles.socialsContainer}>
            <a
              href="https://www.instagram.com/communitymanager_vf/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="mailto:estudiovfuy@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <RiMailLine />
            </a>
            <a
              href="https://www.linkedin.com/in/victoria-fernandez-4727b81b2/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
