import React, { Component } from 'react';
import Beer from './Beer/Beer';
import './App.css';

class App extends Component {
state = {
  beers: [ {id: 'ghyw3', name: "Hobgoblin"},
           {id: 'gksi5', name: "Spitfire"},
           {id: 'sojm3', name: "Bishops Finger"}
  ],
  showBeer: false                          /*If false, the beer component is hidden.*/
}

changeNameHandler = (event, id) => {
  const beerIndex = this.state.beers.findIndex(beer => {
    return beer.id === id;
  });

  const beer = {
    ...this.state.beers[beerIndex]
  };

  beer.name = event.target.value;

  const beers = [...this.state.beers];
  beers[beerIndex] = beer;

  this.setState({beers: beers});
}

toggleBeerHandler =() => {
  const doesShowBeer = this.state.showBeer;
  this.setState({
    showBeer: !doesShowBeer
  });
}

deleteBeerHandler = (beerIndex) => {         /*index argument from below in return, is passed here*/
  const beers = this.state.beers.slice();    /*access all the beers from the state, MAKE A COPY and store in a variable */
  beers.splice(beerIndex, 1);                /*the splice method removes an index on the beers variable by 1 element. 1 element is removed from the array.*/
  this.setState({                            /*update the state.*/
    beers: beers
  });
}

render() {
  const style = {
    backgroundColor: 'darkslategrey ',
    font: 'inherit',
    color: 'white',
    border: '1px solid black',
    padding: '8px',
    cursor: 'pointer'
  };

  let beers = null;

  if (this.state.showBeer) {
    beers = (
      <div>
        {this.state.beers.map((beer, index) => {            /*.map also comes with an index argument.*/
          return <Beer
            click={() => this.deleteBeerHandler(index)}     /*Change to an arrow function in order to access the argument index*/
            name={beer.name}
            key={beer.id}
            change={(event) => this.changeNameHandler(event, beer.id)}/>                                 /*Add a key so react can compare elements with the future with elements from the past when updating the dom.*/
        })}
      </div>
    );
  }
    return (
      <div className="App">
        <h1>Yummy Beers</h1>
        {beers}
        <button
          style = {style}
          onClick = {this.toggleBeerHandler}>Toggle Beers</button>
        </div>
    );
  }
}

export default App;
