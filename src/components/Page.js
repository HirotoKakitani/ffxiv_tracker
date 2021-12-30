import React from 'react';
import CharacterSearch from './CharacterSearch';
import {isInitState} from '../app/characterSlice';
import {useSelector} from 'react-redux';

// wraps a page content component to show CharacterSearch if no character is selected
const Page = (props) => {
  const charData = useSelector((state) => state.character.value);
  let validId = false;
  if (charData && !isInitState(charData)) {
    validId = true;
  }
  if (validId) {
    // if charData is available, show the child component 
    return props.children;
  } else {
    if (props.pageName) {
      
    }
    // if no charData is available, show the search page
    return (
      // <CharacterSearch />
      <div>
        <h1>{props.pageName}</h1>
        <CharacterSearch />
      </div>
      
      
    // <div>
    //   <div className="alert alert-warning d-flex align-items-center" role="alert">
    //     {/* <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg> */}
    //     <div>
    //       An example warning alert with an icon
    //     </div>
    //   </div>
    //   <CharacterSearch />
    // </div>
    )
  }
};

export default Page;
