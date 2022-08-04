import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import logo from "../assets/terra_logo.svg";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HamburgerIconContainer>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </HamburgerIconContainer>
        <LogoImage src={logo} alt="Logo" class="logo-img" />
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const HamburgerIconContainer = styled.div`
  position: absolute;
  left: 10px;
`;

const LogoImage = styled.img`
  width: 5rem;
`;
