import React from "react";
import { HeaderBodyStyle, Nav, Ul, Li, ImgLogo } from "./HeaderStyle";
import Logo from "../../../assets/images/logo.png";
function Header() {
  return (
    <HeaderBodyStyle>
      <Nav>
        <Ul>
          <Li>
            <ImgLogo src={Logo} />
          </Li>
        </Ul>
      </Nav>
    </HeaderBodyStyle>
  );
}

export default Header;
