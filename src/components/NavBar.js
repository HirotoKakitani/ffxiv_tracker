import React from 'react';
class NavBar extends React.Component {
  // TODO Need to change the color styling of the react bootstrap component
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">FFXIV Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ffxiv-navbar-collapse" aria-controls="ffxiv-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="ffxiv-navbar-collapse">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/mounts">Mounts</a>
              <a className="nav-link" href="/404">Minions</a>
              <a className="nav-link" href="/404">Aether Currents</a>
              <a className="nav-link" href="/404">Other</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default NavBar