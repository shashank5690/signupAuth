import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageState } from '../utils/type/ImageState';

const initialState: ImageState = {
  images: [],
  loading: false,
  error: null,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    fetchImagesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchImagesSuccess(state, action: PayloadAction<any[]>) {
      state.images = action.payload;
      state.loading = false;
    },
    fetchImagesFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure } = imageSlice.actions;

export default imageSlice.reducer;
