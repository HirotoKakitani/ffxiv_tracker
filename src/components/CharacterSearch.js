import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCharacterId } from '../app/characterSlice';
class Home extends React.Component {
  // TODO refactor into a functional component and use dispatch. 
  // https://www.twilio.com/blog/react-choose-functional-components
  constructor(props){
    super(props);
    this.characterId = useSelector((state) => state.id.value);
    this.dispatch = useDispatch();
  }
  handleSubmit(event) {
    console.log('submitted', event);
    // debugger;
  }

  render() {
    return (
      <main className="container flex-grow-1 d-flex flex-column justify-content-sm-center">
        <span>Test Span: {this.characterId}</span>
        <form onSubmit={this.dispatch(setCharacterId('39981839'))}>
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
            <button className="btn btn-dark" type="submit">Search</button>
          </div>
        </form>
      </main>
    )
  }
}

export default Home;