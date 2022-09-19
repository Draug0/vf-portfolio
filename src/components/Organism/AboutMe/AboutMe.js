import { TitleSection, BoldSpan, Paragraph } from "../../../styled-component/styles";
import { AboutMeContainer, AboutMePhoto, AboutMeContainerContent } from "./AboutMeStyles";

const AboutMe = () => {
    return (
        <AboutMeContainer id="aboutme">
            <TitleSection>Sobre mi</TitleSection>
            <AboutMeContainerContent>
                <AboutMePhoto />
                <Paragraph>Hola, mi nombre es <BoldSpan>Victoria Fernandez</BoldSpan> y estudié Community Manager & Publicidad en Coderhouse.</Paragraph>
                <Paragraph>Actualmente me sigo formando en marketing digital porque me apasiona!</Paragraph>
                <Paragraph><BoldSpan>Nuestro trabajo es gestionar y manejar las redes sociales.</BoldSpan></Paragraph>
                <Paragraph>Lograremos llevar tu emprendimiento a otro nivel mediante estrategias de marketing, creando relaciones con los clientes y humanizando la marca.</Paragraph>
                <Paragraph>Con el fin de generar comunidad, atraer clientes potenciales y así aumentar las ventas de tu producto/servicio.</Paragraph>
                <Paragraph><BoldSpan>¿Preparado/a para llevar tu marca al siguiente nivel?</BoldSpan></Paragraph>
            </AboutMeContainerContent>
        </AboutMeContainer>
    );
};

export default AboutMe;