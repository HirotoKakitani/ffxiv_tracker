import React from 'react';
import CharacterSearch from './CharacterSearch';
import {isInitState} from '../app/characterSlice';

// Page requires a child that has a charData property
const Page = (props) => {
  let validId = false;
  // check the child has a property charData
  if (props.children && 
      props.children.props.charData && 
      !isInitState(props.charData)) {
    validId = true;
  }

  console.log('props: ', props.children.props.charData);
  if (validId) {
    // if charData is available, show the child component 
    return props.children;
  } else {
    // if no charData is available, show the search page
    return <CharacterSearch />
  }
};

export default Page;
