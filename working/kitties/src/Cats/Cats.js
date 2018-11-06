import React from 'react';
import './cats.css';

const kitties = (props) => {
  return(
    <div className="kitties">
       <p onClick={props.click}>Breed: {props.breed}, Color: {props.color}</p>
       <p>{props.children}</p>
       <input type="text" onChange={props.changed} value={props.breed}/>
    </div>
  )
};

export default kitties;
