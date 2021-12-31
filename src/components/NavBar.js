import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { isInitState, setCharacterData } from '../app/characterSlice';

const ActiveCharacter = (props) => {
  const charData = useSelector((state) => state.character.value);
  // set whether the info is shown at all
  const dispatch = useDispatch();
  let displayClasses;
  // set where the character info is shown
  if (props.type === 'small') {
    displayClasses = 'd-flex d-md-none me-2';
  }
  else if (props.type === 'large') {
    displayClasses = 'd-none d-md-flex ';
  } 
  else {
    return null;
  }
  if (charData && !isInitState(charData)){  
    console.log('returning avatar');
    return (
      <div className={`${displayClasses} border border-1 border-altdark rounded align-items-center`}>
        <img className="img rounded" src={charData.avatarUrl} alt="Character Small Portrait" style={{height:'50px', width:'50px'}} />
        <div className="mx-2 dropdown">
          <button className="btn btn-transparent dropdown-toggle" type="button" id="navCharDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="d-none d-sm-inline-block">{charData.name}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navCharDropdown">
            <li><Link className="dropdown-item" to="/" onClick={() => dispatch(setCharacterData({id: "", name:"", avatarUrl: ""}))}>Change Character</Link></li>
          </ul>
        </div>
      </div>
    )
  }
  else {
    return (
      <Link className={`${displayClasses} btn btn-dark border border-1 border-altdark rounded align-items-center`} to='/'>
        Search
      </Link>
    );
  }

};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">FFXIV Tracker</Link>
        <div className="d-flex ">
          <ActiveCharacter type="small" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ffxiv-navbar-collapse" aria-controls="ffxiv-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="ffxiv-navbar-collapse">
          <div className="navbar-nav">
            <Link className="nav-link" to="/character">Character</Link>
            <Link className="nav-link" to="/classes">Classes</Link>
            <Link className="nav-link" to="/mounts">Mounts</Link>
            <Link className="nav-link" to="/404">Minions</Link>
            <Link className="nav-link" to="/404">Other</Link>
          </div>
        </div>
        <ActiveCharacter type="large" />
      </div>
    </nav>
  );
}
export default NavBar;
