import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <TemporaryMobileSizeContainer>
        <Header />
        <Outlet />
      </TemporaryMobileSizeContainer>
    </>
  );
};

export default Main;

const TemporaryMobileSizeContainer = styled.div`
  max-width: 425px;
  margin: 0 auto;
`;
