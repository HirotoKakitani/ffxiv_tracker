import React from 'react';
import CharacterSearch from './CharacterSearch';
import CharacterInfo from './CharacterInfo';
import {useSelector} from 'react-redux';

const Page = (props) => {
  const validId = props.charId ? true : false;
  if (validId) {
    return <CharacterInfo charId={props.charId} />;
  } else {
    return <CharacterSearch />;
  }
};
const Home = () => {
  const charId = useSelector((state) => state.character.value);

  console.log('ID', charId);
  return (
    <main className="container flex-grow-1 d-flex flex-column justify-content-sm-center">
      <Page charId={charId}></Page>
    </main>
  );
};

export default Home;
