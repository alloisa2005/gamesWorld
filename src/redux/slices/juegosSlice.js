import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productos: [],
  productosLoading: false,
  productosError: ''
}

export const getAllJuegos = createAsyncThunk(
  'juegos/getAllJuegos',
  async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productos/all`, {next:{revalidate:0}});
    const data = await response.json();    
    return data;
  }
);

export const updateStock = createAsyncThunk(
  'juegos/updateStock',
  async (item) => {            
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/productos/stock/${item.juegoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({cant: item.cant}),     
    });
    const data = await response.json();    
    return data;
  }
);

export const juegosSlice = createSlice({
  name: 'juegos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllJuegos.pending, (state) => {
        state.productosLoading = true;
      })
      .addCase(getAllJuegos.fulfilled, (state, action) => {                
        state.productosLoading = false;
        state.productos = action.payload;        
      })
      .addCase(getAllJuegos.rejected, (state, action) => {
        state.productosLoading = false;
        state.productosError = action.error.message;
      })
      .addCase(updateStock.pending, (state) => {
        state.productosLoading = true;
      })
      .addCase(updateStock.fulfilled, (state, action) => {        
        state.productosLoading = false;
        state.productos = action.payload;        
      })
      .addCase(updateStock.rejected, (state, action) => {
        state.productosLoading = false;
        state.productosError = action.error.message;
      });    
  },
});