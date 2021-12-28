import React from 'react';
import CharacterSearch from './CharacterSearch';
import CharacterInfo from './CharacterInfo';
import {useSelector} from 'react-redux';
import {isInitState} from '../app/characterSlice';

const Page = (props) => {
  let validId = false;
  if (props.charData && !isInitState(props.charData)) {
    validId = true;
  }
  
  if (validId) {
    return <CharacterInfo charData={props.charData} />;
  } else {
    return <CharacterSearch />;
  }
};
const Home = () => {
  const charData = useSelector((state) => state.character.value);

  return (
    <main className="container flex-grow-1 d-flex flex-column justify-content-sm-center p-4">
      <Page charData={charData}></Page>
    </main>
  );
};

export default Home;
