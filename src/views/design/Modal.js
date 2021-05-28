import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SortForm from './SortForm';
import SingleChoice from "./SingleChoice";
import InputFieldForm from "./InputFieldForm";

const StyledPopup = styled(Popup)`
  

  
  // use your custom style for ".popup-overlay"
  &-overlay {
  }
  // use your custom style for ".popup-content"
  &-content[role=tooltip] {
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    background-color: white;
    padding: 10px 10px 10px 10px;
    -webkit-box-shadow: 0 0 20px gray;
    box-shadow: 0 0 20px gray;
    border-radius: 20px;
    
  }
`;


const FilterButton = styled.button`
  background-color: ${props => isNoFilterChosen(props)  ? "rgb(243, 243, 243)" : "rgb(210, 210, 210)"};
  border-color: gray;
  border-style: solid;
  border-width: thin;
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;


// returns true if the no filter is chosen, used for coloring of button
function isNoFilterChosen(props){
  if(props.filterState === null){
    return true;
  }
  if(props.name === "Rating iOS" || props.name === "Rating Android" || props.name === "Price iOS" || props.name === "Price Android"
    || props.name === "Rating Count iOS" || props.name === "Rating Count Android" ){
    if(props.filterState.min === null && props.filterState.max === null){
      return true;
    }
  }
  return false;
}


function loadCorrectForm(props){
  // if it is the sort button display SortForm
  if(props.name === "Sort"){
    return(
      <SortForm filterState={props.filterState} updateListOfApps={props.updateListOfApps}/>
    )
  }
  // if it is a price or rating count button display InputFieldForm
  if(props.name === "Price iOS" || props.name === "Price Android" || props.name === "Rating Count iOS" || props.name === "Rating Count Android"){
    return(
      <InputFieldForm updateListOfApps={props.updateListOfApps} name={props.name}/>
    )
    // if it is a any other button display SingleChoice
  } else {
    return (
      <SingleChoice filterState={props.filterState} updateListOfApps={props.updateListOfApps} name={props.name} nrOfColumns={props.nrOfColumns}/>
    )
  }
}

const Modal = ((props) => (
  // displayed pop up as soon as the displayed button is clicked
  <StyledPopup
    height={props.heightPopUp}
    width={props.widthPopUp}
    trigger={
      /*displayed button*/
      <FilterButton
        filterState={props.filterState}
        name={props.name}
        height={props.heightButton}
        width={props.widthButton}
      >
        {props.name}
      </FilterButton>
    }
    position={props.name === "Price iOS" || props.name === "Price Android" || props.name === "Rating Count iOS" || props.name === "Rating Count Android" ?
      "bottom right": "bottom left"}
    closeOnDocumentClick
  >

    <div>
      {/*loading the correct form as soon as filter is clicked*/}
      {loadCorrectForm(props)}
    </div>
  </StyledPopup>
));


export default Modal;
