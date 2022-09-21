import { BoldSpan, Paragraph } from "../../../../styled-component/styles";
import ContactMeSocialMediaItem from "../ContactMeSocialMediaItem/ContactMeSocialMediaItem";
import { ContactMeSocialMediaContainer } from "./ContactMeSocialMediaStyles";

import Instagram from '../../../../images/Instagram.png';
import Mail from '../../../../images/Correo.png';

const ContactMeSocialMedia = () => {
    return (
        <ContactMeSocialMediaContainer className="mt-4">
            <Paragraph className="d-flex align-items-center" style={{ flex: 1 }}>
                <span>
                    <span>O si no contactame a través de mis </span><BoldSpan>redes sociales</BoldSpan>
                </span>
            </Paragraph>
            <ContactMeSocialMediaItem 
                style={{ flex: 1 }}
                image={ Mail } 
                title={ "Correo electrónico" } 
                contact={ "estudiovfuy@gmail.com" }>
            </ContactMeSocialMediaItem>
            <ContactMeSocialMediaItem
                style={{ flex: 1 }}
                image={ Instagram } 
                title={ "Instagram" } 
                contact={ "@communitymanager_vf" }>
            </ContactMeSocialMediaItem>
        </ContactMeSocialMediaContainer>
    );
};

export default ContactMeSocialMedia;