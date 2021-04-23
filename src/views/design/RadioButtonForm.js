import React from "react";
import styled from "styled-components";

const PopUpContentContainer = styled.div`
  display: flex;
  heigth: 600px;
  width: 100%;

`;

const IOSContainer = styled.div`
  width: 50%;
  min-width: 250px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-right-color: gray;
  border-right-style: solid;
  border-right-width: thin;
`;

const IOSTitle = styled.div`
  font-size: 24px;
  font-weight: bold;s
  
`;

const IOSRadioButtonContainer = styled.div`
  width: 100%;
`;

const AndroidContainer = styled.div`
  width: 50%;
  min-width: 250px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 10px;
`;

const AndroidTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const AndroidRadioButtonContainer = styled.div`
  
`;

const LabelAndRadioButtonContainer = styled.div`
  width: auto;
  margin: 5px 5px 5px 5px;
  display: flex;
  flex-wrap: nowrap;
`;


const RadioButtonLabelContainer = styled.div`
  width: 80%;
`;

const RadioButtonLabel = styled.label`
  font-size: 20px;
  min-width: 250px;
`;

const RadioButtonContainer = styled.div`
  width: 20%;
  position: relative;
  display: flex;
  align-items: center;
`;

const RadioButton = styled.input`
  /*height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
  background-color: #ff00e5;*/
`;

const CustomRadioButton = styled.span`
  /*position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #c2a515;
  border-radius: 50%;
  {LabelAndRadioButtonContainer}:hover & {
    background: #ccc;
  }
  {RadioButton}:checked & {
    background-color: blue;
  }
  &::after {
    content: "";
    position: absolute;
    display: none;
  }*/
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
    this.props.updateSort(event.target.value);
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
            <LabelAndRadioButtonContainer>
              <RadioButtonLabelContainer>
                <RadioButtonLabel>
                  Most Expensive
                </RadioButtonLabel>
              </RadioButtonLabelContainer>
              <RadioButtonContainer>
                <RadioButton
                    type="radio"
                    value="Most Expensive iOS"
                    checked={this.state.selectedOption === "Most Expensive iOS"}
                    onChange={this.onValueChange}
                />
                <CustomRadioButton/>
              </RadioButtonContainer>
            </LabelAndRadioButtonContainer>
            <LabelAndRadioButtonContainer>
              <RadioButtonLabelContainer>
                <RadioButtonLabel>
                  Cheapest
                </RadioButtonLabel>
              </RadioButtonLabelContainer>
              <RadioButtonContainer>
                <RadioButton
                    type="radio"
                    value="Cheapest iOS"
                    checked={this.state.selectedOption === "Cheapest iOS"}
                    onChange={this.onValueChange}
                />
                </RadioButtonContainer>
            </LabelAndRadioButtonContainer>
            <LabelAndRadioButtonContainer>
              <RadioButtonLabelContainer>
                <RadioButtonLabel>
                  Highest Rating
                </RadioButtonLabel>
              </RadioButtonLabelContainer>
              <RadioButtonContainer>
                <RadioButton
                    type="radio"
                    value="Highest Rating iOS"
                    checked={this.state.selectedOption === "Highest Rating iOS"}
                    onChange={this.onValueChange}
                />
              </RadioButtonContainer>
            </LabelAndRadioButtonContainer>
            <LabelAndRadioButtonContainer>
              <RadioButtonLabelContainer>
                <RadioButtonLabel>
                  Lowest Rating
                </RadioButtonLabel>
              </RadioButtonLabelContainer>
              <RadioButtonContainer>
                <RadioButton
                    type="radio"
                    value="Lowest Rating iOS"
                    checked={this.state.selectedOption === "Lowest Rating iOS"}
                    onChange={this.onValueChange}
                />
              </RadioButtonContainer>
            </LabelAndRadioButtonContainer>
            <LabelAndRadioButtonContainer>
              <RadioButtonLabelContainer>
                <RadioButtonLabel>
                  Hightest Rating Count
                </RadioButtonLabel>
              </RadioButtonLabelContainer>
              <RadioButtonContainer>
                <RadioButton
                    type="radio"
                    value="Highest Rating Count iOS"
                    checked={this.state.selectedOption === "Highest Rating Count iOS"}
                    onChange={this.onValueChange}
                />
              </RadioButtonContainer>
            </LabelAndRadioButtonContainer>
            <LabelAndRadioButtonContainer>
              <RadioButtonLabelContainer>
                <RadioButtonLabel>
                  Lowest Rating Count
                </RadioButtonLabel>
              </RadioButtonLabelContainer>
              <RadioButtonContainer>
                <RadioButton
                    type="radio"
                    value="Lowest Rating Count iOS"
                    checked={this.state.selectedOption === "Lowest Rating Count iOS"}
                    onChange={this.onValueChange}
                />
              </RadioButtonContainer>
            </LabelAndRadioButtonContainer>
          </IOSRadioButtonContainer>
        </IOSContainer>



        <AndroidContainer>
          <AndroidTitle>
            Android
          </AndroidTitle>
          <IOSRadioButtonContainer>
            <LabelAndRadioButtonContainer>
              <RadioButtonLabelContainer>
                <RadioButtonLabel>
                  Most Expensive
                </RadioButtonLabel>
              </RadioButtonLabelContainer>
              <RadioButtonContainer>
                <RadioButton
                    type="radio"
                    value="Most Expensive Android"
                    checked={this.state.selectedOption === "Most Expensive Android"}
                    onChange={this.onValueChange}
                />
                <CustomRadioButton/>
              </RadioButtonContainer>
            </LabelAndRadioButtonContainer>
            <LabelAndRadioButtonContainer>
              <RadioButtonLabelContainer>
                <RadioButtonLabel>
                  Cheapest
                </RadioButtonLabel>
              </RadioButtonLabelContainer>
              <RadioButtonContainer>
                <RadioButton
                    type="radio"
                    value="Cheapest Android"
                    checked={this.state.selectedOption === "Cheapest Android"}
                    onChange={this.onValueChange}
                />
              </RadioButtonContainer>
            </LabelAndRadioButtonContainer>
            <LabelAndRadioButtonContainer>
              <RadioButtonLabelContainer>
                <RadioButtonLabel>
                  Highest Rating
                </RadioButtonLabel>
              </RadioButtonLabelContainer>
              <RadioButtonContainer>
                <RadioButton
                    type="radio"
                    value="Highest Rating Android"
                    checked={this.state.selectedOption === "Highest Rating Android"}
                    onChange={this.onValueChange}
                />
              </RadioButtonContainer>
            </LabelAndRadioButtonContainer>
            <LabelAndRadioButtonContainer>
              <RadioButtonLabelContainer>
                <RadioButtonLabel>
                  Lowest Rating
                </RadioButtonLabel>
              </RadioButtonLabelContainer>
              <RadioButtonContainer>
                <RadioButton
                    type="radio"
                    value="Lowest Rating Android"
                    checked={this.state.selectedOption === "Lowest Rating Android"}
                    onChange={this.onValueChange}
                />
              </RadioButtonContainer>
            </LabelAndRadioButtonContainer>
            <LabelAndRadioButtonContainer>
              <RadioButtonLabelContainer>
                <RadioButtonLabel>
                  Hightest Rating Count
                </RadioButtonLabel>
              </RadioButtonLabelContainer>
              <RadioButtonContainer>
                <RadioButton
                    type="radio"
                    value="Highest Rating Count Android"
                    checked={this.state.selectedOption === "Highest Rating Count Android"}
                    onChange={this.onValueChange}
                />
              </RadioButtonContainer>
            </LabelAndRadioButtonContainer>
            <LabelAndRadioButtonContainer>
              <RadioButtonLabelContainer>
                <RadioButtonLabel>
                  Lowest Rating Count
                </RadioButtonLabel>
              </RadioButtonLabelContainer>
              <RadioButtonContainer>
                <RadioButton
                    type="radio"
                    value="Lowest Rating Count Android"
                    checked={this.state.selectedOption === "Lowest Rating Count Android"}
                    onChange={this.onValueChange}
                />
              </RadioButtonContainer>
            </LabelAndRadioButtonContainer>
          </IOSRadioButtonContainer>
        </AndroidContainer>
      </PopUpContentContainer>
    );
  }
}

export default RadioButtonForm;