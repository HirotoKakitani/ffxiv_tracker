import React, {useEffect, useState} from 'react';
import axios from 'axios';
const parseData = (characterData) => {
  if (Object.keys(characterData).length === 0) {
    return <p>empty</p>
  } 
  else {
    // TODO style the character info page
    return (
      <div className="container d-flex flex-row flex-sm-wrap">
        <div className="col-sm-6">
          <h1>{characterData.data.Character.Name}</h1>
          <img className="img-fluid" src={characterData.data.Character.Portrait} alt="Character Portrait" />
        </div>
        <div className="w-100 col-sm-6">
          <p>{characterData.data.Character.ActiveClassJob.ClassID}</p>
        </div>
      </div>
    )
  }
}
const CharacterInfo = (props) => {
  // useEffect is basically like componentDidMount
  const [characterData, setCharacterData] = useState({});
  useEffect(() => {
    const url = `https://xivapi.com/character/${props.charId}`;
    axios.get(url).then((response) => {
      setCharacterData(response);
    });
  });
  return parseData(characterData);
};

export default CharacterInfo;
