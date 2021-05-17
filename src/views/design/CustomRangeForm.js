


import React from "react";
import styled from "styled-components";


const PopUpContentContainer = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  flex-wrap: wrap;


`;

const ButtonContainer = styled.div`
  width: 33%;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonTextContainer = styled.div`
  width: 80%;

`;

const ButtonText = styled.label`
  
`;

const RadioButtonContainer = styled.div`
  width: 20%;

`;

const RadioButton = styled.input`
  &:hover{
    cursor: pointer;
  }
`;

class MultipleChoice extends React.Component {
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
    this.props.updateListOfApps(event.target.value);
    console.log("sex:", event.target.value);
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }



  render() {

    return (
      <PopUpContentContainer>

      </PopUpContentContainer>
    );
  }
}
