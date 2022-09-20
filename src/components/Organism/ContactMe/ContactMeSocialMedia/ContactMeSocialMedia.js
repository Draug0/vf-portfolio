import { BoldSpan, Paragraph } from "../../../../styled-component/styles";
import ContactMeSocialMediaItem from "../ContactMeSocialMediaItem/ContactMeSocialMediaItem";
import { ContactMeSocialMediaContainer } from "./ContactMeSocialMediaStyles";

import Instagram from '../../../../images/Instagram.png';
import Mail from '../../../../images/Correo.png';

const ContactMeSocialMedia = () => {
    return (
        <ContactMeSocialMediaContainer className="mt-4">
            <Paragraph styyle={{ width: "307px" }}className="col">O si no contactame a través de mis <BoldSpan>redes sociales</BoldSpan></Paragraph>
            <ContactMeSocialMediaItem 
                className="col" 
                image={ Mail } 
                title={ "Correo electrónico" } 
                contact={ "estudiovfuy@gmail.com" }>
            </ContactMeSocialMediaItem>
            <ContactMeSocialMediaItem 
                className="col" 
                image={ Instagram } 
                title={ "Instagram" } 
                contact={ "@communitymanager_vf" }>
            </ContactMeSocialMediaItem>
        </ContactMeSocialMediaContainer>
    );
};

export default ContactMeSocialMedia;