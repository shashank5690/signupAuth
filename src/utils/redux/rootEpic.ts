import { combineEpics, Epic } from 'redux-observable';
import { authEpic } from '../../Screens/ScreenLogin/redux/authEpic';
import { imageEpic } from '../../Screens/ScreenHome/redux/imageEpic'; // Import the new imageEpic

// export const rootEpic = combineEpics(
//   authEpic,
//   imageEpic
// );

const epic: Epic[] = [
  authEpic,
  imageEpic
] as Epic[];

export const rootEpic = combineEpics(...epic);