


import React from "react";
import styled from "styled-components";
import {radioButtonData} from "../../helpers/FilterCategoryData";

const PopUpContentContainer = styled.div`
  height: 300px;
  width: 100%;


`;

const PopUpContentTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const PopUpContentBody = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

const FromContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 20px;
  width: 50%
`;

const ToContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 20px;
  width: 50%

`;

const TitleInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const TitleInputField = styled.label`
  
`;

const InputFieldContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const InputField = styled.input`
  &::placeholder {
    color: rgb(92, 92, 92);
  }

  &:hover {
    cursor: pointer;
  }

  font-size: 16px;
  height: 40px;
  padding-left: 15px;
  border: 1px solid #5c5c5c;
  border-radius: 10px;
  width: 100%;
  background-color: #ecf7fa;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  &:hover {
    transform: translateY(-2px);
    cursor: pointer;
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
  width: 50%;
  min-width: 30%;
`;

class InputFieldForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      lowerBoundary: 1,
      upperBoundary: 5
    };
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleInputChange(key, value) {
    this.setState({ [key]: value });
  }

  formSubmit() {
    let value = (
      {
        "min": this.state.lowerBoundary,
        "max": this.state.upperBoundary
      }
    )
    console.log(this.props.name);
    this.props.updateListOfApps(radioButtonData[this.props.name].filter, value);
  }



  render() {

    return (
      <PopUpContentContainer>
        <PopUpContentTitle>
          {this.props.name}
        </PopUpContentTitle>
        <PopUpContentBody>
          <FromContainer>
            <TitleInputContainer>
              <TitleInputField>
                From
              </TitleInputField>
            </TitleInputContainer>
            <InputFieldContainer>
              <InputField
                placeholder={1}
                type="number"
                onChange={(e) => {
                  this.handleInputChange("lowerBoundary", e.target.value);
                }}
              >

              </InputField>
            </InputFieldContainer>
          </FromContainer>
          <ToContainer>
            <TitleInputContainer>
              <TitleInputField>
                To
              </TitleInputField>
            </TitleInputContainer>
            <InputFieldContainer>
              <InputField
                type="number"
                placeholder={5}
                onChange={(e) => {
                  this.handleInputChange("upperBoundary", e.target.value);
                }}
              >

              </InputField>
            </InputFieldContainer>
          </ToContainer>
          <SubmitButtonContainer>
            <SubmitButton
              onClick={()=>this.formSubmit()}
            >
              Submit
            </SubmitButton>
          </SubmitButtonContainer>
        </PopUpContentBody>
      </PopUpContentContainer>
    );
  }
}




export default InputFieldForm;