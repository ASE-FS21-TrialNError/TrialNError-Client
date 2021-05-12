import React from "react";
import styled from "styled-components";


const ErroLabel = styled.label`
  color: red;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
const ErrorDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  alignitems: "center";
  background-color: aqua;
`;

const Error = ({ message }) => {
  return (
    <div>
      {message ? (
        <ErrorDiv>
          <ErroLabel style={{ color: "black" }}>Error Message : </ErroLabel>
          <ErroLabel>{message} </ErroLabel>
        </ErrorDiv>
      ) : (
        ""
      )}
    </div>
  );
};

export default Error;
