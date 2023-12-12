// create a redux toolkit store
import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slices/cartSlice';
import { favoritosSlice } from './slices/favoritosSlice';
import { compraSlice } from './slices/compraSlice';
import { juegosSlice } from './slices/juegosSlice';

// create the store
export const store = configureStore({
  reducer: {        
    favoritos: favoritosSlice.reducer,    
    cart: cartSlice.reducer,
    compras: compraSlice.reducer,
    juegos: juegosSlice.reducer,
  },  
});



