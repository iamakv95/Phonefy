import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [], 
  reducers: {
    addToWishlist: (state, action) => {
      if (!state.some(item => item.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export const selectWishlist = state => state.wishlist;

export default wishlistSlice.reducer;
