import React from 'react';
import './Beer.css';


const beer = (props) => {
  return (
    <div className="beer">
      <h3 onClick={props.click} >Beer: {props.name}</h3>
      <input type="text" onChange={props.change} value={props.name}/>
    </div>
  )
}

export default beer;
