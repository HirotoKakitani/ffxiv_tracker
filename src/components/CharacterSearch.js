import React from 'react';
import {useDispatch} from 'react-redux';
import {setCharacterData} from '../app/characterSlice';
import {
  Link,
} from 'react-router-dom';

// Use case for useCallback: https://www.robinwieruch.de/react-usecallback-hook/
// if the callback function is passed in to this component as a prop, then this component will
// rerender every time the parent rerenders, even if this component doesnt rely on any values from 
// parent. This is because when the parent rerenders, the function definitions (passed in callback) 
// also gets redefined. This component sees the redefined function, and rerenders even when it doesn't
// need to. 
const CharacterSearch = () => {
  const dispatch = useDispatch();
  const characterDataHandler = () => {
    dispatch(setCharacterData({id: '39981839', name:'Leolo Lan\'nal', avatarUrl: "https://img2.finalfantasyxiv.com/f/5d9c87b4af26c83a796b26bb02438c25_5c8ecfbc673e1287a9b5e85423fe1657fc0_96x96.jpg?1640572383"}));
  };
  return (
    <div className="form-row d-flex align-items-end flex-wrap gap-3">
      <div className="col-md m1">
        <label htmlFor="ffxiv_name_input" className="form-label">Character Name</label>
        <input name="charName" type="text" className="form-control bg-light text-dark" id="ffxiv_name_input"></input>
      </div>
      <div className="col-md m1">
        <label htmlFor="ffxiv_world_input" className="form-label" >World</label>
        <select name="charWorld" className="form-select bg-light text-dark form-control" id="ffxiv_world_input">
          <option value="opt1">test option1</option>
          <option value="opt2">test option2</option>
        </select>
      </div>
      <Link className="btn btn-primary" to="/character" onClick={characterDataHandler}>Search</Link>
    </div>
  );
};

export default CharacterSearch;
