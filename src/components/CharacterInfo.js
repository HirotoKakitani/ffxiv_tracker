import React, { useEffect, useState } from "react";
import axios from "axios";

const getCharacterInfo = (id) => {
  const url = `https://xivapi.com/character/${id}`;
  axios.get(url).then((response) => {
    console.log('response: ', response);
    // TODO set the response to be characterData state. 
  })
};

const CharacterInfo = (props) => {
  // useEffect is basically like componentDidMount
  const [characterData, setCharacterData] = useState({});
  useEffect(() => getCharacterInfo(getCharacterInfo));
  console.log('asdasd'); 
  return (
    <div>
      <div>Char info placeholder: {props.charId}</div>
      <div>data: {JSON.stringify(characterData)}</div>
    </div>
  )
}

export default CharacterInfo;