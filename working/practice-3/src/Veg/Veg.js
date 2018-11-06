import React from 'react';
import './Veg.css';
const Veg = (props) => {
  return (
    <div>
      <p>Vegetable: {props.name}, Quantity: {props.quantity} </p>
      <input type="text" class="input" onChange={props.change} value={props.name}/>
      <input type="text" class="input" onChange={props.changeQuantity} value={props.quantity}/>
    </div>
  )
}

export default Veg;
