import React, { Component } from 'react';
import './App.css';
import Kitties from './Kitties/Kitties';  //Import Person component here. Make sure the folder and file name starts with a capital letter.

class App extends Component {
  state = {                            /* State allows you to change the component and also triggers a UI update. Only class based components can use state.*/
    cats: [
      { breed: 'Ragdoll', color: 'Grey'},
      { breed: 'Persian', color: 'White'},
      { breed: 'Maine Coon', color: 'Lavender'}
    ]
  }
 changeBreedHandler = (newBreed) => {
   this.setState({
     cats: [
       { breed: newBreed, color: 'Black'},
       { breed: 'Persian', color: 'White'},
       { breed: 'Maine Coon', color: 'Lavender'}
    ]
   })
 }

 breedChangedHandler = (event) => {
   this.setState({
     cats: [
       { breed: 'Ragdoll', color: 'Black'},
       { breed: event.target.value, color: 'White'},
       { breed: 'Maine Coon', color: 'Lavender'}
    ]
   })
 }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
         <h1> Lots of Kitties! </h1>
         <button
            style={style}
            onClick={this.changeBreedHandler.bind(this, 'Norwegian Forest')}>Change Breed</button>
         <Kitties
           breed={this.state.cats[0].breed}
           color={this.state.cats[0].color}></Kitties>
         <Kitties
           breed={this.state.cats[1].breed}
           color={this.state.cats[1].color}
           click={this.changeBreedHandler.bind(this, 'Fox')}
           changed={this.breedChangedHandler}>
           5 kittens available. </Kitties>
         <Kitties
           breed={this.state.cats[2].breed}
           color={this.state.cats[2].color}></Kitties>


      </div>
    );
  //  return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Tubby'));
  }
}

export default App;
