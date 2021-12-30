import getImage from '../images/imageLoader';

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
    <div className='d-flex ps-0 pe-3'>
      <img style={{height:"50px", width:"50px"}} src={getImage(imgKey)} alt={`Icon of ${jobName}`}></img>
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between"><span className="fs-6 d-none d-sm-block">{jobName}</span><span className="fs-6">Lv. {classLevel}</span></div> 
        <div className="progress tooltip-target">
          <div className="progress-bar text-dark " role="progressbar" style={{width: `${expProgress}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          <span className="tooltip-content bg-primary rounded p-1">{currentExp}/{maxExp} ({expProgress}%)</span>
        </div>
      </div>
      
    </div>
  )
}

export default CharacterClassInfo;