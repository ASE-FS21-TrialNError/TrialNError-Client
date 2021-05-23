

import styled from "styled-components";

// basic blocks for the registration and login page


export const BaseContainer = styled.div`
  margin-left: auto;
  padding-left: 15px;
  margin-right: auto;
  padding-right: 15px;
`;



export const IntroductionContainer = styled.div`
  width: 60%;
  height: 600px;
  font-size: 16px;
  font-weight: 300;
  border-radius: 30px;
  background-color: rgb(169, 222, 253);
`;

export const Introduction = styled.div`
  height: 600px;
  width: 40%;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
  background: linear-gradient(rgb(55, 134, 252), rgb(4, 31, 184));
  padding: 30px;
  float:left;
  color: white;
  text-align: center;
`;


export const FormContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  justify-content: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  height: 500px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  padding-top: 30px;

  transition: opacity 0.5s ease, transform 0.5s ease;
  float: right;
`;

export const InputField = styled.input`
  &::placeholder {
    color: rgba(0, 0, 0, 1);
  }
  height: 35px;
  padding-left: 15px;
  margin-left: -4px;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-bottom: 20px;
  border-radius: 20px;
  border-bottom-color:rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  min-height: 35px;
`;

export const Label = styled.label`
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

