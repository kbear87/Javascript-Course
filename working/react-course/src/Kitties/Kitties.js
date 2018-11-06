import React from 'react';
import './kitties.css';

const kitties = (props) =>{
  return (
    <div className="Kitties">
     <p onClick={props.click} >Kitt: {props.breed},   Color: {props.color}</p>
     <p>{props.children}</p>
     <input type="text" onChange={props.changed} value={props.breed}/>
    </div>
   )
};

export default kitties;
