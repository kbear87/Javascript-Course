import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Character from './Character/Character';

class App extends Component {
  state = {
    userinput: ''
  }

  changeUserInputHandler = (event) => {
    this.setState({
      userinput: event.target.value
    })
  }

  render() {
    const characterList = this.state.userinput.split('').map(character => {
      return <Character
               character = {character}>
             </Character>
    })
    return (
      <div>
         <input type="text" onChange={this.changeUserInputHandler} value={this.state.userinput}/>
         <p>{this.state.userinput}</p>
         <Validation
           textLength={this.state.userinput.length}>
         </Validation>
         {characterList}
      </div>
    );
  }
}

export default App;
