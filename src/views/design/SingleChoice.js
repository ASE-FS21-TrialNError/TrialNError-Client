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

class SingleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {
    //console.log(event.target.value)
    this.setState({
      selectedOption: event.target.value
    });

    if(this.props.name === "Category iOS" || this.props.name === "Category Android" || this.props.name === "Content Rating iOS" || this.props.name === "Content Rating Android"){
      if(event.target.value !== "All") {
        this.props.updateListOfApps(radioButtonData[this.props.name].filter, event.target.value);
      }else{
        this.props.updateListOfApps(radioButtonData[this.props.name].filter, null);
      }
    }else{
      if(event.target.value !== "All") {
        this.props.updateListOfApps(radioButtonData[this.props.name].filter, radioButtonData[event.target.value]);
      }else{
        this.props.updateListOfApps(radioButtonData[this.props.name].filter, radioButtonData[this.props.name][event.target.value]);
      }

    }

  }

  checkCategory(category) {
    let isChecked;
    var objectConstructor = ({}).constructor;
    if (this.props.filterState !== null) {
      if (this.props.filterState.constructor !== objectConstructor) {

        // Specific Button case for the buttons Category iOS and Android, Content Rating iOS and Android
        isChecked = this.props.filterState === category;

      } else {
        // Button case for the buttons Rating iOS and Rating Android
        if(this.props.filterState.max !== null) {
          isChecked = this.props.filterState.max + " to " + this.props.filterState.min === category;
        }else{
          isChecked = category === "All";
        }

      }
    }else {
      isChecked = category === "All";
    }
    // All case for the buttons Category iOS and Android, Content Rating iOS and Android
    return isChecked;
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
                    checked={this.checkCategory(category)}
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




export default SingleChoice;