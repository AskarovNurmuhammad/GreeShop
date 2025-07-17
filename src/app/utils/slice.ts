import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: "hidden",
  displayModal: "hidden",
  cotegoryEdit: 0,
  productEdit: 0,
  category: "",
  productId: 0,
  isClick: true,
};

export const mySlice = createSlice({
  name: "mySlice",
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
    setDisplayModal: (state, action) => {
      state.displayModal = action.payload;
    },
    setEditCotegory: (state, action) => {
      state.cotegoryEdit = action.payload;
    },
    setProductEdit: (state, action) => {
      state.productEdit = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setProductId: (state, action) => {
      state.productId = action.payload;
    },
    setIsClick: (state, action) => {
      state.isClick = action.payload;
    },
  },
});

export const {
  setDisplay,
  setDisplayModal,
  setEditCotegory,
  setProductEdit,
  setCategory,
  setProductId,
  setIsClick,
} = mySlice.actions;
