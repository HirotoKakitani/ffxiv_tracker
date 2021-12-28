import React from 'react';
import {useDispatch} from 'react-redux';
import {setCharacterData} from '../app/characterSlice';

const CharacterSearch = () => {
  const dispatch = useDispatch();
  const characterDataHandler = () => {
    dispatch(setCharacterData({id: '39981839', name:'Leolo Lan\'nal', avatarUrl: "https://img2.finalfantasyxiv.com/f/5d9c87b4af26c83a796b26bb02438c25_5c8ecfbc673e1287a9b5e85423fe1657fc0_96x96.jpg?1640572383"}));
  };
  return (
    <div>
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
        <button className="btn btn-primary" type="submit" onClick={characterDataHandler}>Search</button>
      </div>
    </div>
  );
};

export default CharacterSearch;
