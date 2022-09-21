import {
  ContactMeSocialMediaItemContainer,
  ContactMeSocialMediaTitle,
  ContactMeSocialMediaSubtitle,
  ContactMeSocialMediaImage,
  ContactMeSocialMediaDataContainer,
} from "./ContactMeSocialMediaItemStyles";
import Image from "next/image";

const ContactMeSocialMediaItem = ({ title, contact, image, url }) => {
  return (
    <ContactMeSocialMediaItemContainer>
      <ContactMeSocialMediaImage>
        <Image src={image} alt={title} />
      </ContactMeSocialMediaImage>
      <ContactMeSocialMediaDataContainer
        className="p-2"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <ContactMeSocialMediaTitle>{title}: </ContactMeSocialMediaTitle>
        <ContactMeSocialMediaSubtitle>{contact}</ContactMeSocialMediaSubtitle>
      </ContactMeSocialMediaDataContainer>
    </ContactMeSocialMediaItemContainer>
  );
};

export default ContactMeSocialMediaItem;
