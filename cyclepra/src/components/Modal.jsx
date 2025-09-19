import { Component } from "react";
import '../Modal.css';
import styled from "styled-components";
// import './App.css';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  min-width: 300px;
  text-align: center;
`;



export class Modal extends Component{
    componentDidMount() {
    // додаємо слухача на клавішу Escape
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      console.log("Modal state:", this.props.isOpen);
    }
  }

  componentWillUnmount() {
    // прибираємо слухача після демонтажу
    window.removeEventListener("keydown", this.handleKeyDown);
  }

   handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };



    

    render(){

    const { isOpen, onClose, children } = this.props;

        if (!isOpen) {
        return null; // якщо закрито, нічого не рендеримо
        }

        return(
            <Backdrop onClick={this.handleBackdropClick} className="backDrop">
                <ModalContainer className="modal">
                    {children}
                    <p>Hello PoInt</p>
                    <button onClick={onClose}>Close</button>
                </ModalContainer>
            </Backdrop>
        )
    }
}

export default Modal;
// Реалізація модального вікна в React з використанням методів життєвого циклу
// Створіть новий React проект або використайте вже існуючий.
// Створіть новий файл, наприклад Modal.js, для компонента, який відповідатиме за відображення модального вікна.
// Імпортуйте бібліотеку styled-components та стилі для модального вікна. 
// Створіть файли Modal.js та Modal.css.
// Створіть класовий компонент Modal, який розширює Component.
// В класовому компоненті визначте стан для відстеження відкриття/закриття модального вікна та методи для його відкриття, закриття та обробки клавіш.
// Використайте методи componentDidMount, componentWillUnmount, а також componentDidUpdate для відслідковування подій.
// Розробіть логіку для відображення та закриття модального вікна. Відобразіть модальне вікно при відкритті та закрийте при натисканні кнопок чи клавіші "Escape".
// Імпортуйте та використайте компонент Modal  в App.
// Запустіть додаток та переконайтеся, що модальне вікно відображається та може бути закрите.
// Додатково (опціонально): спробуйте змінити дизайн та додати анімацію до модального вікна.

