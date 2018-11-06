import React, { Component } from 'react';
import Validation from './Validation/Validation';
import CharacterComponent from './Character'
import './App.css';

class App extends Component {
  state ={
    userInput: ''
  }

  changeUserInputHandler =(event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  removeCharacter = (index) => {
       let input = this.state.userInput;
       input = input.slice(0, index) + input.slice(index + 1);
       this.setState({userInput: input});
  }

  render() {
    return (
      <div className="App">
          <input type="text" onChange={this.changeUserInputHandler} value={this.state.userInput} />
          <p>{this.state.userInput}</p>
          <Validation textLength={this.state.userInput.length}>
          </Validation>


          <div>
          {this.state.userInput.split("")
             .map((character,index) => {
               return <CharacterComponent
                 key={index}
                 character={character}
                 characterIndex={index}
                 onCharacterClicked={this.removeCharacter}
                 />
               })
           }
          </div>
      </div>
    );
  }
}

export default App;
