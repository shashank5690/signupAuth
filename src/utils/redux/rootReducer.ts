import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../Screens/ScreenLogin/redux/authSlice';
import imageReducer from '../../Screens/ScreenHome/redux/imageSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  image: imageReducer, // Add to rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
