import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import RadioButtonForm from './RadioButtonForm';

const StyledPopup = styled(Popup)`

  // use your custom style for ".popup-overlay"
  &-overlay {
  }
  // use your custom style for ".popup-content"
  &-content {
    height: 300px;
    width: 600px;
    background-color: red;
  }
`;


const SortButton = styled.button`
  background-color = rgb(220,220,220);
  border-color: black;
  border: solid;
  width: 100px;
  height: 50px;
  font-size: 24px;
  fond-weight: bold;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Modal = ((props) => (
  <StyledPopup trigger={<SortButton> Trigger</SortButton>} position="bottom center"
    closeOnDocumentClick
  >

    <div>
      <RadioButtonForm sex={props.sex} updateSex={props.updateSex}/>
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
