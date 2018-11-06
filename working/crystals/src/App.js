import React, { Component } from 'react';
import Crystal from './Crystal/Crystal';
import './App.css';

class App extends Component {
  state = {
    crystals: [{name: "Amethyst"},
              {name: "Celestite"},
              {name: "Quartz"}
           ]
  }

  render() {

   return (
      <div className="App">
        <h1>Crystals</h1>
        {this.state.crystals.map((crystal) => {
          return <Crystal
          name = {crystal.name}/>
        })}
      </div>
    );
  }
}

export default App;
