import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import userReducer from '../features/user/userSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    user: userReducer
  },
});
