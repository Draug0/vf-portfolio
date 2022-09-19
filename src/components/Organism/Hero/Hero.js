import React from "react";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={`container-fluid ${styles.imgBG}`}></div>
    </section>
  );
};

export default Hero;
