import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProductsSliderActive: false,
  sliderCurrentValue: 1,
  products: [],
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    toggleProductsSlider: (state, { payload }) => {
      return { ...state, isProductsSliderActive: payload };
    },
    changeSliderProduct: (state, { payload }) => {
      return { ...state, sliderCurrentValue: payload };
    },
  },
});

export const { toggleProductsSlider, changeSliderProduct } =
  globalSlice.actions;
export default globalSlice.reducer;
