import React from 'react';

const userInput = (props) => {
  return <input type="text" onChange={props.changeAnswer} value={props.defaultInputText}/>
}

export default userInput;
