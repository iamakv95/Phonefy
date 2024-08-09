import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/features/cartSlice';
import wishlistReducer from '../redux/features/wishlistSlice';
import { targetAPI } from './services/targetAPI';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer, 
    [targetAPI.reducerPath]: targetAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(targetAPI.middleware),
});
