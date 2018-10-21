import React, { Component } from 'react';
import './App.css';
import Kitties from './Kitties/Kitties';  //Import Person component here. Make sure the folder and file name starts with a capital letter.

class App extends Component {
  state = {                            /* State allows you to change the component and also triggers a UI update. Only class based components can use state.*/
    cats: [
      { breed: 'Ragdoll', color: 'Grey'},
      { breed: 'Persian', color: 'White'},
      { breed: 'Maine Coon', color: 'Lavender'},
      { breed: 'Bombay', color: 'black'}
    ]
  }
  render() {
    return (
      <div className="App">
         <h1> Lots of Kitties! </h1>
         <button>Change Breed</button>
         <Kitties breed={this.state.cats[0].breed} color={this.state.cats[0].color}> 10 kittens available. </Kitties>
         <Kitties breed={this.state.cats[1].breed} color={this.state.cats[1].color}> 5 kittens available. </Kitties>
         <Kitties breed={this.state.cats[2].breed} color={this.state.cats[2].color}> 8 kittens available. </Kitties>
         <Kitties breed={this.state.cats[3].breed} color={this.state.cats[3].color}> None currently available. </Kitties>
      </div>
    );
  //  return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Tubby'));
  }
}

export default App;
