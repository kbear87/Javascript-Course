import React from 'react';
import './beer.css';
import Radium from 'radium';

const beer =(props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    <div className="beer" style={style}>
       <h3 onClick={props.onBeerClicked}>Beer: {props.name}</h3>
       <input type="text" onChange={props.changeNameInput} value={props.name}/>
    </div>
  )
}

export default Radium(beer);
