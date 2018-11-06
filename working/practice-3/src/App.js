import React, { Component } from 'react';
import './App.css';
import Veg from './Veg/Veg';

class App extends Component {
  state={
    vegetables: [
      {id: 'veg289', name: 'Carrot', quantity: 2},
      {id: 'veg865', name: 'Potato', quantity: 4},
      {id: 'veg042', name: 'Broccoli', quantity: 3}
    ]
  }

  changeVegHandler = (event, id, elementName) => {
     const vegetables = this.state.vegetables.map(vegetable => {
        if(vegetable.id == id) {
          return {
            ...vegetable,
            [elementName]: event.target.value
          }
        } else {
          return vegetable;
        }
     });
     this.setState({vegetables})
  }

  render() {
    return (
      <div className="App">
       {this.state.vegetables.map((vegetable) => {
         return <Veg
           name={vegetable.name}
           quantity={vegetable.quantity}
           key={vegetable.id}
           change={(event) => this.changeVegHandler(event, vegetable.id, 'name')}
           changeQuantity={(event) => this.changeVegHandler(event, vegetable.id,'quantity')}>
         </Veg>
       })}
      </div>
    );
  }
}

export default App;
