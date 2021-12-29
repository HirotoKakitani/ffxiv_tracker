import React from 'react';
import CharacterSearch from './CharacterSearch';
import CharacterInfo from './CharacterInfo';
import Page from './Page';
import {useSelector} from 'react-redux';
import {isInitState} from '../app/characterSlice';

// const Page = (props) => {
//   let validId = false;
//   if (props.charData && !isInitState(props.charData)) {
//     validId = true;
//   }
  
//   if (validId) {
//     return <CharacterInfo charData={props.charData} />;
//   } else {
//     return <CharacterSearch />;
//   }
// };
const Home = () => {
  const charData = useSelector((state) => state.character.value);

  return (
      <Page>
        <CharacterInfo charData={charData}></CharacterInfo>
      </Page>
  );
};

export default Home;
