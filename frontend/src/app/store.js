import { configureStore } from '@reduxjs/toolkit';
import verificationReducer from '../features/verification/verificationSlice';

export const store = configureStore({
  reducer: {
    verification: verificationReducer,
  },
});
