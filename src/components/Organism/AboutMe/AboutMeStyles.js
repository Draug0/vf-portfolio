import styled from "styled-components";
import { Paragraph } from "../../../styled-component/styles";

export const AboutMeTitle = styled.h1`
  font-family: "Noto Serif Display";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 54px;
  text-align: center;
  letter-spacing: 0.7em;

  color: #000000;
`;

export const AboutMeSubtitle = styled.h2`
  font-family: "Arsenica Trial";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
`;

export const AboutMeContainer = styled.section`
  margin: 40px 0;
`;

export const AboutMePhoto = styled.div`
	shape-outside: polygon(0% 0%, 100% 0%, 95% 99.3%, 0% 100%);
	clip-path: polygon(0% 0%, 100% 0%, 95% 99.3%, 0% 100%);
	@media (max-width: 992px) {
    height: 100&;
    width: auto;
  }

	&
`;

export const AboutMeContainerContent = styled.div`
  width: 100%;
  background: #f4e3e2;
  display: flex;
  clip-path: polygon(5% 0%, 100% 0%, 95% 99.3%, 0% 100%);
  shape-outside: polygon(5% 0%, 100% 0%, 95% 99.3%, 0% 100%);
  shape-margin: 10px;
`;

export const AboutMeParagraph = styled(Paragraph)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 1.5em;
  line-height: 2em;
  letter-spacing: 0.15px;
  color: #000000;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const AboutMeParagraphContainer = styled.section`
  font-size: 12px;
  padding: 5px;
`;
