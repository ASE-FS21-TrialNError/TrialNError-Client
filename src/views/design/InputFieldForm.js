


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

const FromContainer = styled.form`
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
  margin-top: 15px;
`;

const Button = styled.button`
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

function onlyNumbers(input){
  var regex = /[^0-9]/g;
  console.log(input)
  //input.value = input.value.replace(regex, "");
}

class InputFieldForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      lowerBoundary: "",
      upperBoundary: ""
    };
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleInputChangeRatingCount(key, value) {
    value = value.replace(/[^0-5]/g, "");
    if(value.length > 0){
      value = value.charAt(0);
    }

    /*value = value.replace(/[A-Za-z\-6-9,]/g, "");
    let stringArray = value.split(".");
    let preDecimalPlaces = value.charAt(0);
    let dot = "";
    let decimalPlaces = "";

    if(value.charAt(1) === "."){
      dot = ".";
    }
    if(stringArray.length === 2){
      decimalPlaces = stringArray[1];
      if(stringArray[1].length >= 2){
        decimalPlaces = stringArray[1].charAt(0) + stringArray[1].charAt(1);
      }
    }
    value = preDecimalPlaces + dot + decimalPlaces;*/

    this.setState({ [key]: value });
  }

  handleInputChangePrice(key, value) {
    value = value.replace(/[A-Za-z-,]/g, "");
    this.setState({ [key]: value });
  }

  formSubmit() {
    let lowerBoundary = this.state.lowerBoundary;
    let upperBoundary = this.state.upperBoundary;
    if(this.state.lowerBoundary !== "" && this.state.upperBoundary !== ""){
      if(lowerBoundary.length === 2 && lowerBoundary.charAt(1) === "."){
        lowerBoundary = lowerBoundary + "0";
      }
      if(upperBoundary.length === 2 && upperBoundary.charAt(1) === "."){
        upperBoundary = upperBoundary + "0";
      }

      let value = (
        {
          "min": lowerBoundary,
          "max": upperBoundary
        }
      )
      if(parseFloat(lowerBoundary) > parseFloat(upperBoundary)){
        value = (
          {
            "min": upperBoundary,
            "max": lowerBoundary
          }
        )
      }
      console.log(this.props.name);
      this.setState(
        {
          lowerBoundary: lowerBoundary,
          upperBoundary: upperBoundary
        }
      );
      this.props.updateListOfApps(radioButtonData[this.props.name].filter, value)

    }

  }

  resetState(){
    this.setState({
      lowerBoundary: "",
      upperBoundary: ""
    })
    let value = (
      {
        "min": null,
        "max": null
      }
    )
    this.props.updateListOfApps(radioButtonData[this.props.name].filter, value);
  }

  render() {

    let prevVal = "";
    document.querySelector('input').addEventListener('input', function(e){
      if(this.checkValidity()){
        prevVal = this.value;
      } else {
        this.value = prevVal;
      }
    });

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
                value={this.state.lowerBoundary}
                onChange={(e) => {
                  this.props.name === "Price iOS"?
                    this.handleInputChangePrice("lowerBoundary", e.target.value)
                    :this.handleInputChangeRatingCount("lowerBoundary", e.target.value);
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
                placeholder={5}
                value={this.state.upperBoundary}
                onChange={(e) => {
                  this.props.name === "Price iOS"?
                    this.handleInputChangePrice("upperBoundary", e.target.value)
                    :this.handleInputChangeRatingCount("upperBoundary", e.target.value);
                }}
              >

              </InputField>
            </InputFieldContainer>
          </ToContainer>
          <SubmitButtonContainer>
            <Button
              onClick={()=>this.formSubmit()}
            >
              Submit
            </Button>
          </SubmitButtonContainer>
          <SubmitButtonContainer>
            <Button
              onClick={()=>this.resetState()}
            >
              Reset
            </Button>
          </SubmitButtonContainer>
        </PopUpContentBody>
      </PopUpContentContainer>
    );
  }
}




export default InputFieldForm;