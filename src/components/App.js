import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import AppRoutes from '../routes/AppRoutes';
/**
 * Root App component
 */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <NavBar></NavBar>
          <main className="container flex-grow-1 d-flex flex-column justify-content-sm-center p-4">
            <AppRoutes/>
          </main>
          <Footer></Footer>
        </div>

      </Router>

    );
  }
}

export default App;
