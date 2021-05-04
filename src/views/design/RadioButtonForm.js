import React from "react";
import styled from "styled-components";

const PopUpContentContainer = styled.div`
  heigth: 600px;
  width: 100%;

`;

const SortingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 85%;
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
  font-weight: bold;
  
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

const NoSortContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;


class RadioButtonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {
    this.props.updateListOfApps("wayOfSorting", valueConverter[event.target.value]);
  }


  render() {
    return (
      <PopUpContentContainer>
        <SortingContainer>
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
                      checked={this.props.filterState === "price_ios-D"}
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
                      checked={this.props.filterState === "price_ios-A"}
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
                      checked={this.props.filterState === "rating_ios-D"}
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
                      checked={this.props.filterState === "rating_ios-A"}
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
                      checked={this.props.filterState === "rating_count_ios-D"}
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
                      checked={this.props.filterState === "rating_count_ios-A"}
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
                      checked={this.props.filterState === "price_andr-D"}
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
                      checked={this.props.filterState === "price_andr-A"}
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
                      checked={this.props.filterState === "rating_andr-D"}
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
                      checked={this.props.filterState === "rating_andr-A"}
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
                      checked={this.props.filterState === "rating_count_andr-D"}
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
                      checked={this.props.filterState === "rating_count_andr-A"}
                      onChange={this.onValueChange}
                  />
                </RadioButtonContainer>
              </LabelAndRadioButtonContainer>
            </IOSRadioButtonContainer>
          </AndroidContainer>
        </SortingContainer>
        <NoSortContainer>
          <LabelAndRadioButtonContainer style={{width: "20%"}}>
            <RadioButtonLabelContainer>
              <RadioButtonLabel>
                Unsorted
              </RadioButtonLabel>
            </RadioButtonLabelContainer>
            <RadioButtonContainer>
              <RadioButton
                type="radio"
                value="Unsorted"
                checked={this.props.filterState === null}
                onChange={this.onValueChange}
              />
            </RadioButtonContainer>
          </LabelAndRadioButtonContainer>
        </NoSortContainer>
      </PopUpContentContainer>
    );
  }
}

const valueConverter = {
  "Most Expensive iOS": "price_ios-D",
  "Cheapest iOS": "price_ios-A",
  "Highest Rating iOS": "rating_ios-D",
  "Lowest Rating iOS": "rating_ios-A",
  "Highest Rating Count iOS": "rating_count_ios-D",
  "Lowest Rating Count iOS": "rating_count_ios-A",
  "Most Expensive Android": "price_andr-D",
  "Cheapest Android": "price_andr-A",
  "Highest Rating Android": "rating_andr-D",
  "Lowest Rating Android": "rating_andr-A",
  "Highest Rating Count Android": "rating_count_andr-D",
  "Lowest Rating Count Android": "rating_count_andr-A",
  "Unsorted": null
}

export default RadioButtonForm;