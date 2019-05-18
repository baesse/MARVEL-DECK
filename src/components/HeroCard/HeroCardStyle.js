import styled from "styled-components";
import { Theme } from "../shared/Theme/Theme";

export const CardBody = styled.div`
  min-width: 350px;
  min-height: 450px;
  box-shadow: 0 0 10px 0 ${Theme.colors.redDefault};
  display: flex;
  flex-flow: column;
  margin-left: 10px;
  margin-right: 10px;
`;

export const HeroImg = styled.img`
  height: 150px;
  transition: transform 0.2s;

  :hover {
    transform: scale(1.5);
    cursor: pointer;
  }
`;

export const HeroName = styled.h3``;

export const HeroInfo = styled.div`
  display: flex;
  flex-flow: column;
  padding: 10px;
  padding-top: 5px;
`;

export const HeroAttributes = styled.span`
  opacity: 0.7;
  margin-top: 2px;

  font-family: "Open Sans", sans-serif;
`;
