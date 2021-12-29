import {createSlice} from '@reduxjs/toolkit';
import { shallowEqual } from 'react-redux';

/**
 * characterData: 
 *  {
 *    id: { 
 *      name: '',
 *      avatarUrl:''
 *    }
 *  }
 */
export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    characterData: {
      id: '',
      name: '',
      avatarUrl: '',
    },
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setCharacterData: (state, action) => {
      state.value = action.payload; 
    }
  },
});
export const isInitState = (state) => {
  return shallowEqual(state, { id: '',name: '', avatarUrl: '' });
}
// Action creators are generated for each case reducer function
export const {setCharacterData} = characterSlice.actions;

export default characterSlice.reducer;
