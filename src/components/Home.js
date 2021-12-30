import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Page from './Page';
import {useSelector} from 'react-redux';
import { hasValidId } from '../app/util';


const Home = () => {
  return (
    <Page>
      <CharacterInfo></CharacterInfo>
    </Page>
  );
};

const CharacterInfo = () => {
  const charData = useSelector((state) => state.character.value);
  const [characterData, setCharacterData] = useState({});
  
  // useEffect is basically like componentDidMount
  useEffect(() => {
    const url = `https://xivapi.com/character/${charData.id}`;
    axios.get(url).then((response) => {
      setCharacterData(response);
    });
  }, [charData]);
  return parseData(characterData);
};

const parseData = (characterData) => {
  if (Object.keys(characterData).length === 0) {
    return <p>empty</p>
  } 
  else {
    return (
      <div className="container border border-dark border-2 ">
        <div className="row bg-dark">
          <h1>Character</h1>
        </div>
        <div className="row">
          <div className="col-md-4 p-4 d-flex flex-column align-items-center align-items-md-start">
            <div className="mb-4">
              <h2 className="fs-3">{characterData.data.Character.Name}</h2>
              <h3 className="fs-4">{characterData.data.Character.Server}</h3>
            </div>
            <img className="img-fluid rounded d-none d-md-block" src={characterData.data.Character.Portrait} alt="Character Full Portrait" />
            <img className="img-fluid rounded d-md-none" src={characterData.data.Character.Avatar} alt="Character Small Portrait" />
          </div>
          <div className="col-md-8 p-4">
            {/* TODO redo char info to show FC, title, etc. move class info to class page*/}
          </div>
        </div>

      </div>
    )
  }
}

export default Home;
