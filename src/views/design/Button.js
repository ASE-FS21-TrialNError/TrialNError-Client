import styled from "styled-components";

export const Button = styled.button`
  &:hover {
    transform: translateY(-2px);
  }
  &:disabled{
    background: rgb(16, 89, 255, 0.4);
  }
  padding: 6px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  height: 35px;
  border: none;
  border-radius: 20px;
  background: rgb(16, 89, 255);
  transition: all 0.3s ease;
  min-width: 30%;
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;