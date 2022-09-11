import React, { useState } from "react";
import Logo from "../../../public/logo.svg";
import {
  Container,
  Item,
  LogoContainer,
  Nav,
  NavbarBurger,
  NavItems,
  SocialsContainer,
} from "./NavbarStyles.js";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiMailLine } from "react-icons/ri";
import { GrLinkedinOption } from "react-icons/gr";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Nav>
        <Container>
          <NavbarBurger
            className={active ? "active" : " "}
            onClick={handleClick}
            role="button"
            tabIndex={0}
          >
            <span />
            <span />
            <span />
          </NavbarBurger>
          <LogoContainer>
            <Image src={Logo} alt="Main logo" priority width={40} height={24} />
            ESTUDIO
          </LogoContainer>
          <NavItems className={active ? "active" : " "}>
            <Item href="#aboutme">SOBRE MI</Item>
            <Item href="#sevices">SERVICIOS</Item>
            <Item href="#works">TRABAJOS</Item>
            <Item href="#contactme">CONTACTO</Item>
            <Item href="#information">INFORMACIÓN</Item>
          </NavItems>
          <SocialsContainer>
            <a>
              <AiOutlineInstagram />
            </a>
            <a>
              <RiMailLine />
            </a>
            <a>
              <GrLinkedinOption />
            </a>
          </SocialsContainer>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
