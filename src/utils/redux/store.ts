import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './rootReducer';
import { rootEpic } from './rootEpic';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Important for handling non-serializable values in actions
    }).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export default store;
