import {isInitState} from '../app/characterSlice';

const hasValidId = (charData) => {
  // let validId = false;
  if (charData && !isInitState(charData)) {
    return true;
  }
  else {
    return false;
  }
}

// Capitalizes the start of each word in the input string
const capitalize = (wordString) => {
  const words = wordString.split(" "); 
  return words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
};


export { hasValidId, capitalize };
