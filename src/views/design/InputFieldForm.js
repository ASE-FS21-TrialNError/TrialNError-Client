


import React from "react";
import styled from "styled-components";


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
  flex-wrap: nowrap;

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

class InputFieldForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
    //this.props.updateListOfApps(event.target.value, radioButtonData[this.props.name].filter);
    console.log("sex:", event.target.value);
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
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
                placeholder={5}
              >

              </InputField>
            </InputFieldContainer>
          </ToContainer>
        </PopUpContentBody>
      </PopUpContentContainer>
    );
  }
}

export default InputFieldForm;