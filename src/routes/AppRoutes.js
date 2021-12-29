import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../components/Home';
import Mounts from '../components/Mounts';
import Classes from '../components/Classes';
import NotFound from '../components/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route
        exact path='/'
        element={
          <Home />
        }>
      </Route>
      <Route
        exact path='/mounts'
        element={
          <Mounts />
        }>
      </Route>
      <Route 
        exact path='/classes'
        element={
          <Classes />
        } 
      ></Route>
      <Route
        path='*'
        element={
          <NotFound />
        }>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
