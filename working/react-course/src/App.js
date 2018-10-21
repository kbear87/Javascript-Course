import React, { Component } from 'react';
import './App.css';
import Kitties from './Kitties/Kitties';  //Import Person component here. Make sure the folder and file name starts with a capital letter.

class App extends Component {
  render() {
    return (
      <div className="App">
         <h1> Lots of Kitties! </h1>
              <Kitties breed="Ragdoll" color="Grey"> 10 kittens available. </Kitties>
              <Kitties breed="Persian" color="White"> 5 kittens available. </Kitties>
              <Kitties breed="Maine Coon" color="Lavender"> 8 kittens available. </Kitties>
              <Kitties breed="Bombay" color="Black"> None currently available. </Kitties>
      </div>
    );
  //  return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Tubby'));
  }
}

export default App;
