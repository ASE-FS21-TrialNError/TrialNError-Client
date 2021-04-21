import React from "react";
import styled from "styled-components";

const PopUpContentContainer = styled.div`
  display: flex;
  heigth: 600px;
  width: 100%;

`;

const IOSContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-right-color: gray;
  border-right-style: solid;
  border-right-width: thin;
`;

const IOSTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  background-color: green;
  
`;

const IOSRadioButtonContainer = styled.div`
  background-color: yellow;
`;

const AndroidContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const AndroidTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const AndroidRadioButtonContainer = styled.div`
  
`;

const RadioButtonContainer = styled.div`
  
`;

const RadioButtonLabel = styled.label`
  font-size: 20px;
  width: 70%;
`;
const RadioButton = styled.input`
  width: 30%;
`;



class RadioButtonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
    this.props.updateSex(event.target.value);
    console.log("sex:", event.target.value);
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (
      <PopUpContentContainer>
        <IOSContainer>
          <IOSTitle>
            iOS
          </IOSTitle>
          <IOSRadioButtonContainer>
            <RadioButtonContainer>
              <RadioButtonLabel>
                Price
              </RadioButtonLabel>
              <RadioButton
                type="radio"
                value="Price iOS"
                checked={this.state.selectedOption === "Male"}
                onChange={this.onValueChange}
              />
            </RadioButtonContainer>


            <RadioButtonContainer>
              <RadioButtonLabel>
                Rating
              </RadioButtonLabel>
              <RadioButton
                type="radio"
                value="Rating iOS"
                checked={this.state.selectedOption === "Male"}
                onChange={this.onValueChange}
              />
            </RadioButtonContainer>
            <RadioButtonContainer>
              <RadioButtonLabel>
                Rating Count iOS
              </RadioButtonLabel>
              <RadioButton
                type="radio"
                value="Rating Count iOS"
                checked={this.state.selectedOption === "Male"}
                onChange={this.onValueChange}
              />
            </RadioButtonContainer>

          </IOSRadioButtonContainer>
        </IOSContainer>
        <AndroidContainer>
          <AndroidTitle>
            Android
          </AndroidTitle>
          <AndroidRadioButtonContainer>
            <RadioButtonLabel>
              <RadioButton
                type="radio"
                value="Price Android"
                checked={this.state.selectedOption === "Male"}
                onChange={this.onValueChange}
              />
            </RadioButtonLabel>
            <RadioButtonLabel>
              <RadioButton
                type="radio"
                value="Rating Android"
                checked={this.state.selectedOption === "Male"}
                onChange={this.onValueChange}
              />
            </RadioButtonLabel>
            <RadioButtonLabel>
              <RadioButton
                type="radio"
                value="Rating Count Android"
                checked={this.state.selectedOption === "Male"}
                onChange={this.onValueChange}
              />
            </RadioButtonLabel>
          </AndroidRadioButtonContainer>
        </AndroidContainer>
      </PopUpContentContainer>
    );
  }
}

export default RadioButtonForm;