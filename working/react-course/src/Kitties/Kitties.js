import React from 'react';

const kitties = (props) =>{
  return (
    <div>
     <p>Kitty: {props.breed},   Color: {props.color}</p>
     <p>{props.children}</p>
    </div>
   )
};

export default kitties;
