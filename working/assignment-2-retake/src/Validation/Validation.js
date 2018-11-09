import React from 'react';

const validation = (props) => {
   if (props.textLength <= 5) {
     return <p>Text too short</p>
   }
   return <p>Text long enough</p>
}

export default validation;
