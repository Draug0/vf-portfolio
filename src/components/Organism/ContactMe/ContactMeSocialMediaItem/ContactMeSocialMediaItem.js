import { ContactMeSocialMediaItemContainer, ContactMeSocialMediaTitle, ContactMeSocialMediaSubtitle, ContactMeSocialMediaImage, ContactMeSocialMediaDataContainer } from "./ContactMeSocialMediaItemStyles";
import Image from "next/image";


const ContactMeSocialMediaItem = ({ title, contact, image }) => {
    return (
        <ContactMeSocialMediaItemContainer>
            <ContactMeSocialMediaImage>
                <Image src={ image } alt={ title } />
            </ContactMeSocialMediaImage>
            <ContactMeSocialMediaDataContainer className="ml-2">
                <ContactMeSocialMediaTitle>{ title }: </ContactMeSocialMediaTitle>
                <ContactMeSocialMediaSubtitle>{ contact }</ContactMeSocialMediaSubtitle>
            </ContactMeSocialMediaDataContainer>
        </ContactMeSocialMediaItemContainer>
    );
};

export default ContactMeSocialMediaItem;