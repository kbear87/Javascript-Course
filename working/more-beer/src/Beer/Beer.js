import React from 'react';
import './beer.css';

const beer = (props) => {
  return (
    <div className="beer">
      <p onClick={props.deleteBeer}>Beer: {props.name}</p>
      <input type="text" onChange={props.changeName} value={props.name}/>
    </div>
  )
}

export default beer;
