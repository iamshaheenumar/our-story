import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body {
  background-color: #0a192f;
  color: #8892b0;
  font-family: "Montserrat", sans-serif;
}


.text-center{
  text-align: center;
}
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PageTitle = styled.h1`
  text-align: center;
  color: #ccd6f6;
`;

export const Timeline = styled.ul`
  border-left: 4px solid #64ffda;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.8);
  margin: 50px auto;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: 50px;
  list-style: none;
  text-align: left;
  font-weight: 100;
  max-width: 30%;

  @media (max-width: 567px) {
    max-width: 90%;
  }

  .event {
    border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
    padding-bottom: 25px;
    margin-bottom: 50px;
    position: relative;
    &::before {
      position: absolute;
      left: -217.5px;
      color: #8892b0;
      content: attr(data-date);
      text-align: right;
      font-weight: 100;
      font-size: 0.9em;
      min-width: 120px;
      @media (max-width: 567px) {
        position: initial;
      }
    }

    &::after {
      position: absolute;
      box-shadow: 0 0 0 4px #64ffda;
      left: -57.85px;
      background: #313534;
      border-radius: 50%;
      height: 11px;
      width: 11px;
      content: "";
      top: 5px;
    }
  }

  h3 {
    letter-spacing: 1.5px;
    font-weight: 400;
    font-size: 1.4em;
    color: #ccd6f6;
  }
`;

export const Logo = styled.img`
  height: 50px;
  align-self: center;
`;
