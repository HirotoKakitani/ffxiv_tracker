import '../styles/App.css';
import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import NavBar from './NavBar';
import AppRoutes from '../routes/AppRoutes' 
import '../styles/App.css'
class App extends React.Component {
  render(){
    return (
      <Router>
        <NavBar></NavBar>
        <AppRoutes/>
      </Router>
      
    );
  }

  componentDidMount() {
    document.body.className = 'apptest';
    console.log('here');
  }
}

export default App;
