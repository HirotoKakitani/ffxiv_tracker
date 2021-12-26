import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
import AppRoutes from '../routes/AppRoutes' 
class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <NavBar></NavBar>
          <AppRoutes/>
          <Footer></Footer>
        </div>
        
      </Router>
      
    );
  }
}

export default App;
