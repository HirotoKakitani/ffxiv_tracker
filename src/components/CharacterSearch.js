import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCharacterId } from '../app/characterSlice';

/**
 * How to persist state between pages? 
 * We just need a character ID to determine what gets loaded in every page. 
 * Don't need redux to do that, just use window.sessionStorage.
 */
const CharacterSearch = () => {
  const dispatch = useDispatch();
  const characterId = useSelector((state) => state.character.values);
  return (
    // <form onSubmit={test}>
    <div>
      <div className="form-row d-flex align-items-end flex-wrap gap-3">
        <div className="col-sm m1">
          <label htmlFor="ffxiv_name_input" className="form-label">Character Name</label>
          <input name="charName" type="text" className="form-control bg-light text-dark" id="ffxiv_name_input"></input>
        </div>
        <div className="col-sm m1">
          <label htmlFor="ffxiv_world_input" className="form-label" >World</label>
          <select name="charWorld" className="form-select bg-light text-dark form-control" id="ffxiv_world_input">
            <option value="opt1">test option1</option>
            <option value="opt2">test option2</option>
          </select>
        </div>
        <button className="btn btn-dark" type="submit" onClick={() => dispatch(setCharacterId('39981839'))}>Search</button>
      </div>
      </div>
    // </form>
  )
}

export default CharacterSearch;