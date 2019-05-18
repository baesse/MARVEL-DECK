import styled from "styled-components";
import { Theme } from "../Theme/Theme";

export const ButtonDefaultStyle = styled.button`
  background-color: ${Theme.colors.redDefault};
  border: none;
  margin-top: 10px;
  height: 50px;
  font-size: 1em;
  font-weight: bold;
  color: white;
  font-family: "DIN Next W01 Regular" !important;
  :hover {
    cursor: pointer;
  }
`;
