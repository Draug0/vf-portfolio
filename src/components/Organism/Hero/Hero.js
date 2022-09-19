import { HeroContainer, HeroSubTitle, HeroTitle } from "./HeroStyles";

const Hero = () => {
    return (
        <HeroContainer className="d-flex justify-content-center align-items-center">
            <div>
                <HeroTitle className="text-center">Victoria Fernandez</HeroTitle>
                <HeroSubTitle className="text-center">Community Manager</HeroSubTitle>
            </div>
        </HeroContainer>
    );
};

export default Hero;