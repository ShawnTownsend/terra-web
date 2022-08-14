import React from "react";
import styled from "styled-components";
// import MenuIcon from "@mui/icons-material/Menu";
// import { IconButton } from "@mui/material";
import logo from "../assets/terra_logo.svg";
import { useNavigate } from "react-router-dom";

const Header2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderContainer>
        <LogoImage
          src={logo}
          alt="Logo"
          class="logo-img"
          onClick={() => navigate("")}
        />
      </HeaderContainer>
    </>
  );
};

export default Header2;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  // right: 20px;
`;

const LogoImage = styled.img`
  width: 138px;
`;
