import React from 'react';
const CharacterComponent = (props) => {
  return <span style={{
    display:'inline-block',
    padding:'16px',
    textAlign: 'center',
    margin:'16px',
    border:'1px solid black'
  }} onClick={() => props.onCharacterClicked(props.characterIndex)}>
    {props.character} -> {props.characterIndex}
  </span>
}

export default CharacterComponent;
