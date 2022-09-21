import {
  HeroContainer,
  HeroSubTitle,
  HeroTitle,
  HeroTitleContainer,
} from "./HeroStyles";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <HeroContainer className={`d-flex position-relative `}>
      <HeroTitleContainer>
        <HeroTitle className="text-center">Victoria Fernandez</HeroTitle>
        <HeroSubTitle className="text-center">Community Manager</HeroSubTitle>
      </HeroTitleContainer>
      <div className={`${styles.heroContainer}`}>
        <video src="/videos/CM-HERO.mp4" autoPlay muted loop />
      </div>
    </HeroContainer>
  );
};

export default Hero;
