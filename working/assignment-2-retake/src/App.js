import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Character from './Character/Character';
import './App.css';

class App extends Component {
state = {
  userInput: ''
}

inputTextHandler = (event) => {
  this.setState({
    userInput: event.target.value
  })
}

removeCharacterHandler = (index) => {
  let input = this.state.userInput;
  input = input.slice(0, index) + input.slice(index + 1 );
  this.setState({
    userInput: input
  })

}

  render() {
    const characterBox = this.state.userInput.split('').map((character, index) => {
      return <Character
                character={character}
                key={index}
                onCharacterClicked={() => this.removeCharacterHandler(index)}>
             </Character>
    });
    return (
      <div className="App">
          <input type="text" onChange={this.inputTextHandler} value={this.state.userInput} />
          <p>{this.state.userInput}</p>
          <Validation
            textLength={this.state.userInput.length}> </Validation>
          {characterBox}
      </div>
    );
  }
}

export default App;
