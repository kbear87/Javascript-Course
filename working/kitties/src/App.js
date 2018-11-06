import React, { Component } from 'react';
import './App.css';
import Cats from './Cats/Cats';

class App extends Component {
  state = {
    cats: [
      { id: 'fdsfa2', breed: 'Maine Coon', color: 'Lavender'},
      { id: 'rwfde1', breed: 'Bombay', color: 'Black'},
      { id: 'thotr6', breed: 'Persian', color: 'White'}
    ],
    showCats: false
  }

  changeCatBreedHandler = (event, id ) => {
    const catIndex = this.state.cats.findIndex(c => {
      return c.id === id;
    });

    const cat = {
      ...this.state.cats[catIndex]
    };

    cat.breed = event.target.value;

    const cats = [...this.state.cats];
    cats[catIndex] = cat;

    this.setState({cats: cats})
  }

deleteCatHandler = (catIndex) => {
   const cats = this.state.cats.slice();
   cats.splice(catIndex, 1);
   this.setState({cats: cats});
}

  toggleCatsHandler = () => {
    const doesShowCats = this.state.showCats;
    this.setState({showCats: !doesShowCats});
  }

  render() {
    const style = {
      backgroundColor: 'mistyrose',
      font: 'inherit',
      border: '1px, solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    let catInfo = null;

    if (this.state.showCats) {
      catInfo = (
        <div>
          {this.state.cats.map((cat, index) => {
            return <Cats
              click = {() => this.deleteCatHandler(index)}
              breed = {cat.breed}
              color = {cat.color}
              key = {cat.id}
              changed = {(event) => this.changeCatBreedHandler(event, cat.id)}/>
          })}
       </div>
      );
    }
    return (
      <div className = "App">
          <h1>Kitties!</h1>
          <button
             style = {style}
             onClick={this.toggleCatsHandler}>
             Toggle Cats
          </button>
          {catInfo}
     </div>
    );
  }
}

export default App;
