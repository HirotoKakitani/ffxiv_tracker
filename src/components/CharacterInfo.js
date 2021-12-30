import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import { hasValidId } from '../app/util';
import CharacterClassInfo from './CharacterClassInfo';

const CharacterInfo = () => {
  const charData = useSelector((state) => state.character.value);
  // useEffect is basically like componentDidMount
  const [characterData, setCharacterData] = useState({});
  useEffect(() => {
    if (hasValidId(charData)) {
      const url = `https://xivapi.com/character/${charData.id}`;
      axios.get(url).then((response) => {
        setCharacterData(response);
      });
    }
    else {
      setCharacterData({});
    }
  }, [charData]);
  
  // if no character data is in the store, show warning.
  if (!hasValidId(charData)) {
    return (
      <div className="alert alert-warning" role="alert">
        <div>No character data loaded.</div>
      </div>
      )
  }
  // if full characterData has been loaded, show data 
  else if (Object.keys(characterData).length > 0) {
    return (
      <div className="container border border-dark border-2">
        <div className="row bg-dark">
          <h1>Character</h1>
        </div>
        <div className="row bg-darkmid">
          <div className="col-md-4 p-4 d-flex flex-column align-items-center align-items-md-start">
            <div className="mb-4">
              <h2 className="fs-3">{characterData.data.Character.Name}</h2>
            </div>
            <img className="img-fluid rounded d-none d-md-block" src={characterData.data.Character.Portrait} alt="Character Full Portrait" />
            <img className="img-fluid rounded d-md-none" src={characterData.data.Character.Avatar} alt="Character Small Portrait" />
          </div>
          <div className="col-md-8 p-4">
            <div className="row row-cols-2">
              <h4 className="fs-5">Data Center: </h4>
              <div>{characterData.data.Character.DC}</div>
              <h4 className="fs-5">Server: </h4>
              <div>{characterData.data.Character.Server}</div>
              <h4 className="fs-5">Free Company: </h4>
              <div>{characterData.data.Character.FreeCompanyName}</div>
              <h4 className="fs-5">Nameday: </h4>
              <div>{characterData.data.Character.Nameday}</div>
              <h4 className="fs-5">Class: </h4>
              <CharacterClassInfo data={characterData.data.Character.ActiveClassJob} border='true'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // if character data is in the store, but full characterData still hasn't been loaded yet, don't show anything
  else {
    return null;
  }
};

export default CharacterInfo;
