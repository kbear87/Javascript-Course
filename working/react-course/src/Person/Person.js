import React from 'react';   // First import React from the 'react' package so the JSX syntax can be transformed into the React createElement.




// In it's simplest form, a component is a function that returns some JSX.
const person = (props) => {   {/* props allows you to pass data from the parent component to the child component*/}
  return (
  <div>
     <p>Sweet Tubbs loves {props.food}</p>
     <p>{props.children}</p>             {/* This will add the hobbies and age text*/}
  </div>
  )
};


export default person;  // This will export the constant 'person' with the contained function.
// Once complete, go to the root component and import it.
