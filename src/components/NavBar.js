import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { isInitState } from '../app/characterSlice';


const ActiveCharacter = (props) => {
  // set whether the info is shown at all
  if (props.charData && !isInitState(props.charData)){
    let displayClasses;
    // set where the character info is shown
    if (props.type === 'small') {
      displayClasses = 'd-md-none';
    }
    else if (props.type === 'large') {
      displayClasses = 'd-none d-md-block';
    } 
    else {
      return null;
    }  
    console.log('returning avatar');
    // TODO style the char info nav element
    return (
      <div className={`${displayClasses}`}>
        <img className="img rounded" src={props.charData.avatarUrl} alt="Character Small Portrait" style={{height:'50px', width:'50px'}} />
        <div></div>
      </div>
    )
  }
  else {
    return null;
  }

};

// TODO Need to change the color styling of the react bootstrap component
const NavBar = () => {
  const charData = useSelector((state) => state.character.value);
  console.log('value', JSON.stringify(charData));
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">FFXIV Tracker</Link>
        <div className="d-flex ">
          <ActiveCharacter type="small" charData={charData} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ffxiv-navbar-collapse" aria-controls="ffxiv-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="ffxiv-navbar-collapse">
          <div className="navbar-nav">
            <Link className="nav-link" to="/mounts">Mounts</Link>
            <Link className="nav-link" to="/404">Minions</Link>
            <Link className="nav-link" to="/404">Aether Currents</Link>
            <Link className="nav-link" to="/404">Classes</Link>
            <Link className="nav-link" to="/404">Other</Link>
          </div>
        </div>
        <ActiveCharacter type="large" charData={charData} />
      </div>
    </nav>
  );
}
export default NavBar;
