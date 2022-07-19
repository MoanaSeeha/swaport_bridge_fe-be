import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountReducer';

export default configureStore({
  reducer: {
    account: accountReducer,
  },
});
