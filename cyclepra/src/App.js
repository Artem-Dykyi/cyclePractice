import './App.css';
import { Component } from 'react';
import Modal from './components/Modal';

export class App extends Component {
  state = {
    opened: false,   
  };

  openModal = () => {
    this.setState({ opened: true }); 
  };

  closeModal = () => {
    this.setState({ opened: false }); 
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.openModal}>open window</button>
        <Modal isOpen={this.state.opened} onClose={this.closeModal}>
          <p>Закрити</p>
        </Modal>
      </div>
    );
  }
}

export default App;