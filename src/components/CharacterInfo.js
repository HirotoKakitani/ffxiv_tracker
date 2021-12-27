import React, {useEffect, useState} from 'react';
import axios from 'axios';
const parseData = (characterData) => {
  if (Object.keys(characterData).length === 0) {
    return <p>empty</p>
  } 
  else {
    // TODO design the character information
    return (
      <div className="container border border-dark border-2">
        <div className="row bg-dark">
          <h1>Character</h1>
        </div>
        <div className="row">
          <div className="col-sm-4 p-4 d-flex flex-column align-items-center align-items-sm-start">
            <div className="mb-4">
              <h2>{characterData.data.Character.Name}</h2>
              <h3>{characterData.data.Character.Server}</h3>
            </div>
            <img className="img-fluid rounded d-none d-sm-block" src={characterData.data.Character.Portrait} alt="Character Full Portrait" />
            <img className="img-fluid rounded d-sm-none" src={characterData.data.Character.Avatar} alt="Character Small Portrait" />
          </div>
          <div className="col-sm-8 p-4">
            <p>{characterData.data.Character.ActiveClassJob.ClassID}</p>
          </div>
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
