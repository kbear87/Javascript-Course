import React from 'react';
import './beer.css';

const beer = (props) => {
  return (
    <div className = "beer">
      <h3 onClick ={props.onBeerClicked}>Beer: {props.name} </h3>
      <input type="text" onChange={props.changeNameInput} value = {props.name}/>
    </div>
  )
}

export default beer;
