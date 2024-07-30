import { combineEpics } from 'redux-observable';
import { authEpic } from '../../Screens/ScreenLogin/redux/authEpic';
import { imageEpic } from '../../Screens/ScreenHome/redux/imageEpic'; // Import the new imageEpic

export const rootEpic = combineEpics(
  authEpic,
  imageEpic
);
