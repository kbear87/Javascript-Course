import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../HOC/Aux';


const cockpit = (props) => {
  const assignedClassStyle =[];

  let buttonClass = classes.Button;
  if (props.beerVisibility) {
    buttonClass = [classes.Button, classes.Blue].join(' ');
  }


  if (props.beerNames.length <= 2) {
    assignedClassStyle.push(classes.pink);
  }

  if (props.beerNames.length <= 1) {
    assignedClassStyle.push(classes.bold);
  }

  return (
        <Aux>
          <h1>BEER!</h1>
          <button
            className={buttonClass}
            onClick={props.pizzaForTubbs}>Tubbs</button>
          <p className={assignedClassStyle.join(' ')}>Lots of beer!</p>
          <button
            className={buttonClass}
            onClick={props.toggleBeers}>Toggle Beers</button>

        </Aux>
    );
};

export default cockpit;
