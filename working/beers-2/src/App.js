import React, { Component } from 'react';
import classes from './App.css';
import Beer from './Beer/Beer';

class App extends Component {
  state = {
    beerNames: [
      {id: '97564', name: ''},
      {id: '36425', name: ''},
      {id: '11986', name: ''}
    ],
    beerVisible: false
  }

  changeNameHandler = (event, id, elementName) => {
    const newBeerName = this.state.beerNames.map(beerName => {
      if (beerName.id === id) {
        return {
          ...beerName,
          [elementName]: event.target.value
        }
      } else {
        return beerName;
      }
    })
    this.setState({beerNames: newBeerName})
  }

  deleteBeerHandler = (beerIndex) => {
    const newBeerArray = this.state.beerNames.slice();
    newBeerArray.splice(beerIndex, 1);
    this.setState({beerNames: newBeerArray});
  }

  toggleBeerVisibilityHandler = () => {
    const isBeerVisible = this.state.beerVisible;
    this.setState({beerVisible: !isBeerVisible})
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

    let beerComponents = null;

    if (this.state.beerVisible) {
      beerComponents = (
        <div>
          {this.state.beerNames.map((beer, index) => {
            return <Beer
                     name= {beer.name}
                     key= {beer.id}
                     changeNameInput= {(event) => this.changeNameHandler(event, beer.id, 'name')}
                     onBeerClicked= {() => this.deleteBeerHandler(index)}/>
            })
          }
        </div>
       )
       buttonStyle.backgroundColor = '#e91e63';
    }

    let stylingClasses = [];

    if (this.state.beerNames.length <= 2) {
      stylingClasses.push(classes.pink);
    }

    if (this.state.beerNames.length <= 1) {
      stylingClasses.push(classes.bold);
    }


    return (
      <div className={classes.App}>
         <h1>Beers</h1>
         <p className={stylingClasses.join(' ')}>Lots of beers!</p>
         {beerComponents}
         <button
           onClick = {this.toggleBeerVisibilityHandler}
           style={buttonStyle}>View/Hide Beers</button>
      </div>
    );
  }
}

export default App;
