import React, { Component } from 'react';
import './App.css';
import Beer from './Beer/Beer';

class App extends Component {
  state = {
    beerNames: [
      {id: '8074', name: 'Hobgoblin'},
      {id: '3623', name: 'Gold'},
      {id: '6782', name: 'Bishops Finger'}
    ],
    beerVisibility: false
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

  render() {
    const buttonStyle = {
       backgroundColor: 'darkslategrey',
       font: 'inherit',
       color: 'white',
       border: '1px solid black',
       padding: '8px',
      cursor: 'pointer',
    };

    let beerComponent = null;

    if (this.state.beerVisibility) {
      beerComponent = (
        this.state.beerNames.map((beer, index) => {
          return <Beer
                   name={beer.name}
                   key={beer.id}
                   deleteBeer={() => this.deleteBeerHandler(index)}
                   changeName={(event) => this.changeNameHandler(event, beer.id, 'name')}/>
         })
      )
      buttonStyle.backgroundColor ='#e91e63';
    }

    let assignedClassStyle =[];

    if (this.state.beerNames.length <= 2) {
      assignedClassStyle.push('pink');
    }

    if (this.state.beerNames.length <= 1) {
      assignedClassStyle.push('bold');
    }

    return (
      <div className="App">
        <h1>BEER!</h1>
        <p className={assignedClassStyle.join(' ')}>Lots of beer!</p>
        {beerComponent}
        <button
          style={buttonStyle}
          onClick={this.toggleBeerHandler}>Toggle Beers</button>
      </div>
    );
  }
}

export default App;
