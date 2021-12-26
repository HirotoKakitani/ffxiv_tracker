import React from 'react';
import {useSelector} from 'react-redux';

const NotFound = () => {
  const id = useSelector((state) => state.character.value);
  return (
    <div>NotFound with state: {id}</div>);
};

export default NotFound;
