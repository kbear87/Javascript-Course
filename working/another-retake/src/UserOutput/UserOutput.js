import React from 'react';

const userOutput = (props) => {
  return (
    <div>
       <p>Can you smell the kissy?</p>
       <p>Can you smell the cow? {props.yesOrNo}</p>
    </div>
  );
}

export default userOutput;
