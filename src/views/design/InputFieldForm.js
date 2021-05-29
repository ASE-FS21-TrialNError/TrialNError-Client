


import React from "react";
import styled from "styled-components";
import {radioButtonData} from "../../helpers/FilterCategoryData";
import { Button} from "./Button";

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
  width: 60%;
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
  border: 1px solid #5c5c5c;
  border-radius: 10px;
  width: 100%;
  background-color: #ecf7fa;
  text-align: center;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`;

const SubmitButton = styled(Button)`
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

// component is shown when the price or rating count filters are clicked
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


  /*handleInputChangeRatingCount(key, value) {
    value = value.replace(/[^0-5]/g, "");
    if(value.length > 0){
      value = value.charAt(0);
    }

    this.setState({ [key]: value });
  }*/

  // for the price and rating count filters only numbers should be allowed to be typed into an input field
  handleInputChange(key, value) {
    // eslint-disable-next-line no-useless-escape
    value = value.replace(/[^0-9]/g, "");
    this.setState({ [key]: value });
  }


  formSubmit() {
    let lowerBoundary = this.state.lowerBoundary;
    let upperBoundary = this.state.upperBoundary;
    if(this.state.lowerBoundary !== "" && this.state.upperBoundary !== ""){

      let hasOtherCharThanZero = /[1-9]/
      // check if whole number only consist of zeros
      if(!hasOtherCharThanZero.test(lowerBoundary)){
        lowerBoundary = "0"
      }else{
        // replace leading zeros
        lowerBoundary = lowerBoundary.replace(/^0+/, "");
      }

      if(!hasOtherCharThanZero.test(upperBoundary)){
        upperBoundary = "0"
      }else{
        // replace leading zeros
        upperBoundary = upperBoundary.replace(/^0+/, "");
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

  // reset state of the of the filter as soon as the reset button is clicked
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
                value={this.props.filterState.min === null? this.state.lowerBoundary: this.props.filterState.min}
                onChange={(e) => {
                  this.props.name === "Price iOS" || this.props.name === "Price Android"?
                    this.handleInputChange("lowerBoundary", e.target.value)
                    :this.handleInputChange("lowerBoundary", e.target.value);
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
                placeholder={this.props.name === "Price iOS" || this.props.name === "Price Android"? 10 : 100000}
                value={this.props.filterState.max === null? this.state.upperBoundary: this.props.filterState.max}
                onChange={(e) => {
                  this.props.name === "Price iOS" || this.props.name === "Price Android"?
                    this.handleInputChange("upperBoundary", e.target.value)
                    :this.handleInputChange("upperBoundary", e.target.value);
                }}
              >

              </InputField>
            </InputFieldContainer>
          </ToContainer>
          <SubmitButtonContainer>
            <SubmitButton
              disabled={this.state.lowerBoundary === "" || this.state.upperBoundary === ""}
              onClick={()=>this.formSubmit()}
            >
              Submit
            </SubmitButton>
          </SubmitButtonContainer>
          <SubmitButtonContainer>
            <SubmitButton
              onClick={()=>this.resetState()}
            >
              Reset
            </SubmitButton>
          </SubmitButtonContainer>
        </PopUpContentBody>
      </PopUpContentContainer>
    );
  }
}




export default InputFieldForm;