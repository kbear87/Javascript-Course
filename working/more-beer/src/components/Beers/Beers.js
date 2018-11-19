import React, { Component } from 'react';
import Beer from './Beer/Beer';

class Beers extends Component {
  render () {
    return this.props.beerNames.map((beer, index) => {
        return <Beer
                 name={beer.name}
                 key={beer.id}
                 deleteBeer={() => this.props.clicked(index)}
                 changeName={(event) => this.props.changed(event, beer.id, 'name')}
                 getsPizza={this.props.isGettingPizza}/>
       });
  }
}

export default Beers;
