import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { hasValidId, capitalize  } from '../app/util';
import axios from 'axios';
import getImage from '../images/imageLoader';

// Class quests: https://xivapi.com/search?indexes=Quest&filters=ClassJobCategory0.BLM=1
// Save to a DB and call that instead of querying FFXIV each time

/**
 * If character Selected, show:
 *  - character progress on all classes (Use Home's ClassInfo component)
 *  - Clicking on any single class will redirect to class/<classname>, where the questline is outlined
 * If character not selected, show: 
 *  - list of classes in game
 */ 
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
  let pageContent = null;
  // show the character class data if it exists
  if (Object.keys(characterClassData).length > 0) {
    pageContent = characterClassData.data.Character.ClassJobs.map(classJob => 
            <CharacterClassInfo data={classJob} key={classJob.JobID}/>
          )
  }
  // otherwise show general class data
  else if (Object.keys(classData).length > 0) {
    console.log('image: ', getImage('alchemist'));
    pageContent = classData.data.Results.map(classJob => 
            <ClassInfo data={classJob} key={classJob.ID} />
          )
  }
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4">
      {pageContent}
    </div>
  )
}

const CharacterClassInfo = (props) => {
  let jobName = props.data.UnlockedState.Name;
  // special case for Blue Mage
  if (jobName.includes(" (Limited Job)")){
    jobName = jobName.replace(" (Limited Job)", ""); 
  }  
  const classLevel = props.data.Level;
  const currentExp = props.data.ExpLevel;
  const maxExp = props.data.ExpLevelMax;
  const expProgress = maxExp === 0 ? 0 : Math.round((currentExp/maxExp) * 100);
  const imgKey = jobName.toLowerCase().replace(' ', '');
  return (
    <div className="d-inline-block">
      <img style={{height:"50px", width:"50px"}} src={getImage(imgKey)} alt={`Icon of ${jobName}`}></img>
      <div className="d-flex justify-content-between"><span className="fs-6">{jobName}</span><span className="fs-6">Lv. {classLevel}</span></div> 
      <div className="progress tooltip-target">
        <div className="progress-bar text-dark " role="progressbar" style={{width: `${expProgress}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        <span className="tooltip-content bg-primary rounded p-1">{currentExp}/{maxExp} ({expProgress}%)</span>
      </div>
    </div>
  )
}

const ClassInfo = (props) => {
  const imgKey = props.data.Name.replace(' ', '');
  return (
    <div>
      <img style={{height:"50px", width:"50px"}} src={getImage(imgKey)} alt={`Icon of ${props.data.Name}`}></img>
      <div>{capitalize(props.data.Name)}</div>
    </div>
  ) 
}

export default Classes;
