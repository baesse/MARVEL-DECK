import styled from "styled-components";
import { Theme } from "../../shared/Theme/Theme";
export const HeaderBodyStyle = styled.div`
  height: 80px;
  width: 100%;
  background-color: ${Theme.colors.backGround};
  box-shadow: 0 0 10px 0 ${Theme.colors.redDefault};
`;

export const Nav = styled.nav`
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
`;
export const Li = styled.li`
  list-style: none;
`;
export const Ul = styled.ul`
  list-style: none;
  display: inline-block;
  margin: 0px;
  padding: 0px;
`;

export const ImgLogo = styled.img`
  width: 150px;
`;
