import React from 'react';
import {useSelector} from 'react-redux';

const NotFound = () => {
  const charData = useSelector((state) => state.character.value);
  let id = "";
  if (charData && charData.characterData) {
    id = charData.characterData.id;
  } 

  return (
    <div>NotFound with state: {id}</div>);
};

export default NotFound;
