import React from 'react';
import {
  Link,
} from 'react-router-dom';
class NavBar extends React.Component {
  // TODO Need to change the color styling of the react bootstrap component
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">FFXIV Tracker</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ffxiv-navbar-collapse" aria-controls="ffxiv-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="ffxiv-navbar-collapse">
            <div className="navbar-nav">
              <Link className="nav-link" to="/mounts">Mounts</Link>
              <Link className="nav-link" to="/404">Minions</Link>
              <Link className="nav-link" to="/404">Aether Currents</Link>
              <Link className="nav-link" to="/404">Other</Link>
            </div>

          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
