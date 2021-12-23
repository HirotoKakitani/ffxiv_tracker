import React from "react";
class Home extends React.Component {
  render() {
    return (
      <main className="container flex-shrink-0">
        <form>
          <div className="form-row align-items-center">
            <div className="col-sm m1">
              <label htmlFor="ffxiv_name_input" className="form-label">Character Name</label>
              <input type="text" className="form-control bg-light text-dark" id="ffxiv_name_input"></input>
            </div>
            <div className="col-sm m1">
              <label htmlFor="ffxiv_world_input" className="form-label" >World</label>
              <select className="form-select bg-light text-dark form-control" id="ffxiv_world_input">
                <option>test option1</option>
                <option>test option2</option>
              </select>
            </div>
            <div className="col-sm m1">
              <button className="btn btn-dark" type="submit">Search</button>
            </div>
          </div>    
          
        </form>
      </main>
    )
  }
}

export default Home;