import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { hasValidId, capitalize } from '../app/util';
import axios from 'axios';
import getImage from '../images/imageLoader';
import CharacterClassInfo from './CharacterClassInfo';
import { Link } from 'react-router-dom';

// Class quests: https://xivapi.com/search?indexes=Quest&filters=ClassJobCategory0.BLM=1
// Save to a DB and call that instead of querying FFXIV each time

/**
 * If character Selected, show:
 *  - character progress on all classes (Use Home's ClassInfo component)
 *  - Clicking on any single class will redirect to class/<classname>, where the questline is outlined
 * If character not selected, show: 
 *  - list of classes in game
 */ 
// TODO style the class page redirect to individual class pages
const Classes = () => {
  const charData = useSelector((state) => state.character.value);
  const [characterClassData, setCharacterClassData] = useState({});
  const [classData, setClassData] = useState({});
  useEffect(() => {
    // get selected character's class data
    if (hasValidId(charData)) {
      console.log('setting effect')
      const url = `https://xivapi.com/character/${charData.id}`;
      axios.get(url).then((response) => {
        setCharacterClassData(response);
      });
    } else {
      setCharacterClassData({});
    }
    // get all class data
    const url = 'https://xivapi.com/ClassJob';
      axios.get(url).then((response) => {
        setClassData(response);
      });
  }, [charData]);
  let pageContent = (
    <div className="spinner-border align-self-center" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
  // show the character class data if it exists
  if (Object.keys(characterClassData).length > 0) {
    pageContent = characterClassData.data.Character.ClassJobs.map(classJob => 
            <CharacterClassInfo data={classJob} key={classJob.JobID}/>
          )
  }
  // otherwise show general class data
  else if (Object.keys(classData).length > 0) {
    pageContent = classData.data.Results.map(classJob => 
            <ClassInfo data={classJob} key={classJob.ID} />
          )
  }
  return (
    <div className="container border border-dark border-2 bg-darkmid">
      <div className="row bg-dark">
        <h1>Classes</h1>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 p-4">
        {pageContent}
      </div>
    </div>
  )
}

const ClassInfo = (props) => {
  const classKey = props.data.Name.replace(' ', '');
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Link to={`/classes/${classKey}`}><img style={{height:"50px", width:"50px"}} src={getImage(classKey)} alt={`Icon of ${props.data.Name}`}></img></Link>
      <div>{capitalize(props.data.Name)}</div>
    </div>
  ) 
}

export default Classes;
