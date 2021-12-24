import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './characterSlice';

export default configureStore({
  reducer: {
    charcter: characterReducer,
  },
})