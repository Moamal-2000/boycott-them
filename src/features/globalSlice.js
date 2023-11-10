import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {},
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;
