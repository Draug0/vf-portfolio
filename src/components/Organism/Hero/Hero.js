import { HeroContainer, HeroSubTitle, HeroTitle, HeroTitleContainer, HeroImage } from "./HeroStyles";
import HeroVideo from '../../../images/HeroImage.png';
import Image from "next/image";

const Hero = () => {
    return (
        <HeroContainer className="d-flex justify-content-center align-items-center">
            <div className="position-relative">
                <HeroImage class="img-fluid" src={ HeroVideo } alt="Video presentación"/>
                <HeroTitleContainer>
                    <HeroTitle className="text-center">Victoria Fernandez</HeroTitle>
                    <HeroSubTitle className="text-center">Community Manager</HeroSubTitle>
                </HeroTitleContainer>
            </div>
        </HeroContainer>
    );
};

export default Hero;
