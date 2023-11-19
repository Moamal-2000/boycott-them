import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProductsSliderActive: false,
  sliderCurrentValue: 1,
  clickedProductSlider: "",
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
    changeClickedProductSlider: (state, { payload }) => {
      console.log(payload);
      return { ...state, clickedProductSlider: payload };
    },
  },
});

export const {
  toggleProductsSlider,
  changeSliderProduct,
  changeClickedProductSlider,
} = globalSlice.actions;
export default globalSlice.reducer;
