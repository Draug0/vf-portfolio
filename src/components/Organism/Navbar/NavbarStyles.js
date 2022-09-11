import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  height: 56px;
  width: 100vw;
  background-color: #f6f6f6;
  font-family: "Playfair Display", serif;
`;

export const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavItems = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  height: calc(100vh - 56px);
  width: 0%;
  background-color: #f6f6f6;
  overflow: hidden;
  transition: width 0.5s ease, padding 0.5s ease;
  display: flex;
  flex-direction: column;

  padding: 0;

  &.active {
    width: 70vw;

    padding: 0 10px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.a`
  height: 50px;
  width: 100%;
  line-height: 27px;
  font-size: 20px;
  border-bottom: 1px solid rgba(0, 22, 138, 0.08);
  padding: 15px 5px;
  white-space: nowrap;
  text-decoration: none;
  color: #000;
`;

export const NavbarBurger = styled.div`
  color: #4a4a4a;
  appearance: none;
  background: 0 0;
  border: none:
  cursor: pointer;
  display: block;
  height: 3.25rem;
  width: 3.25rem;
  position: relative;

  & span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    -webkit-transform-origin: center;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color,opacity,-webkit-transform;
    transition-property: background-color,opacity,transform;
    transition-property: background-color,opacity,transform,-webkit-transform;
    transition-timing-function: ease-out;
    width: 16px;

    &:first-child {
      top: calc(50% - 6px);
    }

    &:nth-child(2) {
      top: calc(50% - 1px);
    }

    &:nth-child(3) {
      top: calc(50% + 4px);
    }
  }

  &.active span {
    &:first-child {
      transform: translateY(5px) rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: translateY(-5px) rotate(-45deg);
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  & a {
    text-decoration: none;
    color: #000;
    display: none;

    & svg {
      width: 34px;
      height: 34px;
    }

    &:first-child {
      display: block;
    }
  }

  @media (min-width: 426px) {
    & a {
      display: block;

      & svg {
        width: 28px;
        height: 28px;
      }
    }
  }
`;
