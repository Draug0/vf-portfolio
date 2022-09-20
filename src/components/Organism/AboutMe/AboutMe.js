import { TitleSection, BoldSpan } from "../../../styled-component/styles";
import { AboutMeContainer, AboutMePhoto, AboutMeContainerContent, AboutMeParagraph, AboutMeParagraphContainer } from "./AboutMeStyles";
import Image from "next/image";
import Photo from "../../../images/VictoriaPhoto.jpg";

const AboutMe = () => {
    return (
        <AboutMeContainer id="aboutme">
            <article className="container">
                <TitleSection>SOBRE MÍ</TitleSection>
                <AboutMeContainerContent>
                    <AboutMePhoto>
                        <Image src={ Photo } alt={ "Foto Victoria Fernández" }/>
                    </AboutMePhoto>
                    <AboutMeParagraphContainer className="p-3">
                        <AboutMeParagraph>Hola, mi nombre es <BoldSpan>Victoria Fernández</BoldSpan> y estudié Community Manager & Publicidad en Coderhouse.</AboutMeParagraph>
                        <AboutMeParagraph>Actualmente me sigo formando en marketing digital porque me apasiona!</AboutMeParagraph>
                        <AboutMeParagraph><BoldSpan>Nuestro trabajo es gestionar y manejar las redes sociales.</BoldSpan></AboutMeParagraph>
                        <AboutMeParagraph>Lograremos llevar tu emprendimiento a otro nivel mediante estrategias de marketing, creando relaciones con los clientes y humanizando la marca.</AboutMeParagraph>
                        <AboutMeParagraph>Con el fin de generar comunidad, atraer clientes potenciales y así aumentar las ventas de tu producto/servicio.</AboutMeParagraph>
                        <AboutMeParagraph className="p-0 m-0"><BoldSpan>¿Preparado/a para llevar tu marca al siguiente nivel?</BoldSpan></AboutMeParagraph>
                    </AboutMeParagraphContainer>
                </AboutMeContainerContent>
            </article>
        </AboutMeContainer>
    );
};

export default AboutMe;