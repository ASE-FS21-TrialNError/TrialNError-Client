import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import RadioButtonForm from './RadioButtonForm';
import MultipleChoice from "./MultipleChoice";
import {InputField} from "./LoginRegistration";
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


const SortButton = styled.button`
  background-color: rgb(243, 243, 243);
  border-color: gray;
  border-style: solid;
  border-width: thin;
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  font-size: 18px;
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

function loadCorrectForm(props){
  if(props.name === "Sort"){
    return(
      <RadioButtonForm sex={props.sex} updateListOfApps={props.updateListOfApps}/>
    )
  }
  if(props.name === "Price iOS" || props.name === "Price Android" || props.name === "Rating Count iOS" || props.name === "Rating Count Android"){
    return(
      <InputFieldForm updateListOfApps={props.updateListOfApps} name={props.name}/>
    )
  } else {
    return (
      <MultipleChoice updateListOfApps={props.updateListOfApps} name={props.name}/>
    )
  }
}

const Modal = ((props) => (
  <StyledPopup
    height={props.heightPopUp}
    width={props.widthPopUp}
    trigger={<SortButton height={props.heightButton} width={props.widthButton}>{props.name}</SortButton>}
    position="bottom center"
    closeOnDocumentClick
  >

    <div>
      {loadCorrectForm(props)}
    </div>
  </StyledPopup>
));


// const Modal = () => (
//   <Popup
//     trigger={<button className="button"> Open Modal </button>}
//     modal
//     nested
//   >
//     {close => (
//       <div className="modal">
//         <button className="close" onClick={close}>
//           &times;
//         </button>
//         <div className="header"> Modal Title </div>
//         <div className="content">
//           {' '}
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
//           Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
//           delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
//           <br />
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
//           commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
//           explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
//         </div>
//         <div className="actions">
//           <Popup
//             trigger={<button className="button"> Trigger </button>}
//             position="top center"
//             nested
//           >
//             <span>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
//               magni omnis delectus nemo, maxime molestiae dolorem numquam
//               mollitia, voluptate ea, accusamus excepturi deleniti ratione
//               sapiente! Laudantium, aperiam doloribus. Odit, aut.
//             </span>
//           </Popup>
//           <button
//             className="button"
//             onClick={() => {
//               console.log('modal closed ');
//               close();
//             }}
//           >
//             close modal
//           </button>
//         </div>
//       </div>
//     )}
//   </Popup>
// );



export default Modal;
