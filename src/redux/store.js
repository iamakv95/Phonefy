import { configureStore } from '@reduxjs/toolkit';
import { targetAPI } from './services/targetAPI';

export const store = configureStore({
  reducer: {
    [targetAPI.reducerPath]: targetAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(targetAPI.middleware),
});