import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FunFacts = ({ funFactToggle, funFactMessage }) => {
  return (
    <>
      <CardContainer onClick={funFactToggle}>
        <FunFactsCard>{funFactMessage}</FunFactsCard>
      </CardContainer>
    </>
  );
};

export default FunFacts;

FunFacts.propTypes = {
  funFactToggle: PropTypes.func,
  funFactMessage: PropTypes.string,
};

FunFacts.defaultProps = {
  funFactToggle: null,
  funFactMessage: null,
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const FunFactsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px grey solid;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  background-color: green;
  box-shadow: 2px 3px grey;
`;
