import React, {useEffect, useState} from 'react';
import axios from 'axios';

const parseData = (characterData) => {
  if (Object.keys(characterData).length === 0) {
    return <p>empty</p>
  } 
  else {
    // Class quests: https://xivapi.com/search?indexes=Quest&filters=ClassJobCategory0.BLM=1
    // Save to a DB and call that instead of querying FFXIV each time
    console.log('Rendering data...');
    
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
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4">
              {characterData.data.Character.ClassJobs.map(classJob => (
                <ClassInfo data={classJob} key={classJob.JobID}/>
              ))}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

// list item that describes class level 
const ClassInfo = (props) => {
  let jobName = props.data.UnlockedState.Name;
  // special case for Blue Mage
  if (jobName.includes("(Limited Job)")){
    jobName = jobName.replace("(Limited Job)", ""); 
  }
  const classLevel = props.data.Level;
  const currentExp = props.data.ExpLevel;
  const maxExp = props.data.ExpLevelMax;
  const expProgress = maxExp === 0 ? 0 : Math.round((currentExp/maxExp) * 100);
  // TODO Class Icons: https://github.com/xivapi/classjob-icons
  return (
    <div className="d-inline-block">
      <div className="d-flex justify-content-between"><span className="fs-6">{jobName}</span><span className="fs-6">Lv. {classLevel}</span></div> 
      <div className="progress tooltip-target">
        <div className="progress-bar text-dark " role="progressbar" style={{width: `${expProgress}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        <span className="tooltip-content bg-primary rounded p-1">{currentExp}/{maxExp} ({expProgress}%)</span>
      </div>
    </div>
  )
}

const CharacterInfo = (props) => {
  // useEffect is basically like componentDidMount
  const [characterData, setCharacterData] = useState({});
  useEffect(() => {
    const url = `https://xivapi.com/character/${props.charData.id}`;
    axios.get(url).then((response) => {
      setCharacterData(response);
    });
  }, [props.charData]);
  return parseData(characterData);
};

export default CharacterInfo;
