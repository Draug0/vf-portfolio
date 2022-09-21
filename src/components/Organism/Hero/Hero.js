import {
  HeroContainer,
  HeroSubTitle,
  HeroTitle,
  HeroTitleContainer,
  HeroImage,
} from "./HeroStyles";

import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <HeroContainer className={`d-flex position-relative `}>
        <HeroTitleContainer>
            <HeroTitle className="text-center">Victoria Fernandez</HeroTitle>
            <HeroSubTitle className="text-center">Community Manager</HeroSubTitle>
        </HeroTitleContainer>
        <div className={`${ styles.heroContainer }`}>
            
        </div>
    </HeroContainer>
  );
};

export default Hero;
