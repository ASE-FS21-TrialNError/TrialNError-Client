import React from "react";
import styled from "styled-components";
import {radioButtonData} from "../../helpers/FilterCategoryData";

const PopUpContentContainer = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  flex-wrap: wrap;


`;

const ButtonContainer = styled.div`
  width: ${(props)=> 100 / props.nrOfColumns}%;
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
  }

  onValueChange(event) {
    console.log(event.target.value)
    this.setState({
      selectedOption: event.target.value
    });

    if(this.props.name === "Category iOS" || this.props.name === "Category Android"){
      this.props.updateListOfApps(radioButtonData[this.props.name].filter, event.target.value);
    }else{
      this.props.updateListOfApps(radioButtonData[this.props.name].filter, radioButtonData[event.target.value]);
    }

  }


  render() {

    return (
      <PopUpContentContainer>
        {
          radioButtonData[this.props.name].categories.map((category)=>{
            return(
              <ButtonContainer nrOfColumns={this.props.nrOfColumns} key={category}>
                <ButtonTextContainer>
                  <ButtonText>
                    {category}
                  </ButtonText>
                </ButtonTextContainer>
                <RadioButtonContainer>
                  <RadioButton
                    type="radio"
                    value={category}
                    checked={this.state.selectedOption === category}
                    onChange={this.onValueChange}
                  />
                </RadioButtonContainer>


              </ButtonContainer>
              )

          })
        }
      </PopUpContentContainer>
    );
  }
}




export default MultipleChoice;