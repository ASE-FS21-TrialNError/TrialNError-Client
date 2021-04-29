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
        {
          radioButtonData[this.props.name].map((category)=>{
            return(
              <ButtonContainer>
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

const radioButtonData = (
  {
    "Category iOS": [
      "Games",
    "Education",
    "Entertainment",
    "Business",
    "Music",
    "Finance",
    "Lifestyle",
    "Utilities",
    "Photo & Video",
    "Productivity",
    "Book",
    "Reference",
    "Sports",
    "News",
    "Travel",
    "Medical",
    "Social Networking",
    "Shopping",
    "Health & Fitness",
    "Graphics & Design",
    "Food & Drink",
    "Navigation",
    "Weather",
    "Developer Tools",
    "Stickers",
    "Magazines & Newspapers"
    ],
    "Category Android":
    [
      "Tools",
      "Arcade",
      "Casual",
      "Simulation",
      "Puzzle",
      "Education",
      "Action",
      "Business",
      "Entertainment",
      "Music & Audio",
      "Sports",
      "Finance",
      "Role Playing",
      "Racing",
      "Books & Reference",
      "Lifestyle",
      "Communication",
      "Productivity",
      "Adventure",
      "Photography",
      "Strategy",
      "Personalization",
      "Educational",
      "Social",
      "Board",
      "Travel & Local",
      "Card",
      "Word",
      "Video Players & Editors",
      "News & Magazines",
      "Health & Fitness",
      "Medical",
      "Shopping",
      "Trivia",
      "Art & Design",
      "Maps & Navigation",
      "Auto & Vehicles",
      "Weather",
      "Food & Drink",
      "Casino",
      "Libraries & Demo",
      "Events",
      "Comics",
      "Dating",
      "House & Home",
      "Music",
      "Parenting",
      "Beauty",
    ],
    "Rating iOS":[
      "5 to 4",
      "4 to 3",
      "3 to 2",
      "2 to 1"
    ],
    "Rating Android": [
      "5 to 4",
      "4 to 3",
      "3 to 2",
      "2 to 1"
    ]

  }
)


export default MultipleChoice;