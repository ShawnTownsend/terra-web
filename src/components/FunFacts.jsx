import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FunFacts = ({ funFactToggle, funFactMessage, funFactRef }) => {
  return (
    <>
      <CardContainer onClick={funFactToggle}>
        <FunFactsCard>
          {funFactMessage}
          <FunFactReference>{funFactRef}</FunFactReference>
        </FunFactsCard>
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
  margin: 12px 32px 0px 32px;
`;

const FunFactsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px grey solid;
  border-radius: 32px;
  padding: 16px 28px;
  color: white;
  background-color: #398a2c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const FunFactReference = styled.div`
  font-size: 10px;
  margin-top: 8px;
  align-items: flex-start;
  width: 100%;
`;
