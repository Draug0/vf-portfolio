import styled from "styled-components";
import Image from "next/image";

export const HeroContainer = styled.div`
  
`;

export const HeroTitle = styled.div`
  font-family: "Noto Serif Display";
  font-style: normal;
  font-weight: bolder;
  font-size: 2.5rem;
  line-height: 3rem;
  text-align: center;
  letter-spacing: 0.7rem;

  color: #000000;

  @media (max-width: 769px) {
    font-size: 2rem;
  }
`;

export const HeroSubTitle = styled.div`
  font-family: "Arsenica Trial";
  font-style: normal;
  font-weight: bolder;
  font-size: 2.5rem;
  line-height: 48px;

  color: #000000;

  @media (max-width: 769px) {
    font-size: 1.5rem;
  }
`;

export const HeroTitleContainer = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 2;
`;

export const HeroImage = styled(Image)`
  filter: blur(1px) opacity(25%) brightness(1.5);
  height: 100%;
  width: 100%;

  & img {
    height: 100&;
    width: auto;
  }
`;
