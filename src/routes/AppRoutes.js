import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Mounts from '../components/Mounts';
import Classes from '../components/Classes';
import NotFound from '../components/NotFound';
import CharacterSearch from '../components/CharacterSearch';
import CharacterInfo from '../components/CharacterInfo';
import ClassPage from '../components/ClassPage';

function AppRoutes() {
  return (
    <Routes>
      <Route
        exact path='/'
        element={<CharacterSearch />}>
      </Route>
      <Route
        exact path='/character'
        element={<CharacterInfo />}>
      </Route>
      <Route
        exact path='/mounts'
        element={<Mounts />}>
      </Route>
      <Route 
        exact path='/classes'
        element={<Classes />}>
      </Route>
      <Route 
        path='/classes/:classname'
        element={<ClassPage />}>
      </Route>
      <Route
        path='*'
        element={<NotFound />}>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
