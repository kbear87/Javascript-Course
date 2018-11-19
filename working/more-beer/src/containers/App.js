import React, { Component } from 'react';
import classes from './App.css';
import Beers from '../components/Beers/Beers';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../HOC/WithClass';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerNames: [
        {id: '8074', name: 'Hobgoblin'},
        {id: '3623', name: 'Gold'},
        {id: '6782', name: 'Bishops Finger'}
      ],
      beerVisibility: false,
      getsPizza: false
    }
  }

  toggleBeerHandler = () => {
    const isBeerVisible = this.state.beerVisibility;
    this.setState({beerVisibility: !isBeerVisible});
  }

  deleteBeerHandler = (beerIndex) => {
    const newBeerArray = this.state.beerNames.slice();
    newBeerArray.splice(beerIndex, 1);
    this.setState({beerNames: newBeerArray});
  }

  changeNameHandler =(event, id, elementName) => {
    const newBeerName = this.state.beerNames.map(beerName => {
      if (beerName.id === id){
        return {
          ...beerName,
          [elementName]: event.target.value
        }
      } else {
        return beerName
      }
    })
    this.setState({beerNames: newBeerName});
  }

  pizzaHandler = () => {
    this.setState({getsPizza: true});
  }



  render() {
    let beerComponent = null;

    if (this.state.beerVisibility) {
      beerComponent = <Beers
            beerNames={this.state.beerNames}
            clicked={this.deleteBeerHandler}
            changed={this.changeNameHandler}
            isGettingPizza={this.state.getsPizza}/>
      }

   return (
      <WithClass classes={classes.App}>

        <Cockpit
          beerVisibility={this.state.beerVisibility}
          beerNames={this.state.beerNames}
          toggleBeers={this.toggleBeerHandler}
          pizzaForTubbs={this.pizzaHandler}/>
          {beerComponent}
      </WithClass>
    );
  }
}

export default App;
