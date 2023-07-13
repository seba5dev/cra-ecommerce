import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartReducer';
import selectedItemReducer from './ui/selectedItemReducer';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    selectedItem: selectedItemReducer,
  },
});

export default store;
