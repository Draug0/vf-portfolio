import { useState } from "react";
import { BoldSpan } from "../../../../styled-component/styles";
import {
  ContactMeFormParagraph,
  ContactMeFormImage,
  ContactMeFormContainer,
  ContactMeTextFieldMail,
  ContactMeTextFieldName,
  ContactMeTextFieldSurname,
  ContactMeTextFieldMessage,
  ContactMeButton,
} from "./ContactMeFormStyles";

import ContactImage from './../../../../images/ContactImage.png';
import Image from "next/image";


const ContactMeForm = () => {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[3].value);

    fetch("https://formsubmit.co/ajax/96f67177b47f0fe8622ae6f263bc3133", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Nombre: e.target[0].value,
        Apellido: e.target[1].value,
        Email: e.target[2].value,
        Mensaje: e.target[3].value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSent(data.success);
        setValues({
          name: "",
          surname: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSent(false);
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} >
      <ContactMeFormContainer>
        <ContactMeFormParagraph>
          Si querés ponerte en contacto conmigo{" "}
          <BoldSpan>envía un mensaje</BoldSpan> dejando tu nombre, apellido y
          correo electrónico.
        </ContactMeFormParagraph>

        <ContactMeTextFieldName
          className="mt-4"
          id="name"
          name="name"
          label="Nombre"
          variant="filled"
          onChange={handleChange}
          value={values.name}
        ></ContactMeTextFieldName>
        <ContactMeTextFieldSurname
          className="mt-4"
          id="surname"
          name="surname"
          label="Apellido"
          variant="filled"
          onChange={handleChange}
          value={values.surname}
        ></ContactMeTextFieldSurname>
        <ContactMeTextFieldMail
          className="mt-4"
          id="email"
          name="email"
          label="Correo electrónico"
          variant="filled"
          onChange={handleChange}
          value={values.email}
        ></ContactMeTextFieldMail>
        <ContactMeTextFieldMessage
          className="mt-4"
          id="message"
          name="message"
          label="Mensaje"
          variant="filled"
          multiline
          rows={4}
          onChange={handleChange}
          value={values.message}
        />
        <ContactMeButton className={`mt-4 ${sent ? "sent" : ""}`} type="submit">
          {sent ? "¡ENVIADO!" : "ENVIAR"}
        </ContactMeButton>
        <ContactMeFormImage>
          <Image 
            style={{ width: "auto", height: "100%" }}
            src={ ContactImage } 
            alt={ "Imagen alusiva al formulario" }
          />
        </ContactMeFormImage>
      </ContactMeFormContainer>
    </form>
  );
};

export default ContactMeForm;
