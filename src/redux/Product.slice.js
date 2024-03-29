import { createSlice } from "@reduxjs/toolkit";

// ! create a product slice form redux toolkit
const ProductSlice = createSlice({
  name: "ProductSlice",
  // ! create inital state
  initialState: {
    productList: [],
    catagoires: [],
    cart: [],
  },
  // ! call the reducer function
  reducers: {
    // save product form productlisr
    saveProducts: (state, action) => {
      state.productList = action.payload;
    },
    // get product catagorie wise
    saveCatagories: (state, action) => {
      state.catagoires = action.payload;
    },
    // put data form cart
    addtoCart: (state, action) => {
      let index = state.cart.findIndex((cart) => cart.id === action.payload.id);
      if (index !== -1) {
        state.cart[index].Qty += 1;
      } else {
        //adding new record to card
        state.cart.push(action.payload);
      }
    },
    // remove single product in carts
    removeCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },

    // check product quntity and add more quantity
    manageQuantity: (state, action) => {
      const { sign, index } = action.payload;
      if (sign === "+") {
        state.cart[index].Qty += 1;
      } else {
        if (state.cart[index].Qty === 1) {
          state.cart.splice(action.payload, 1);
        } else {
          state.cart[index].Qty -= 1;
        }
      }
    },
  },
});

// export reducer function
export const {
  saveProducts,
  saveCatagories,
  addtoCart,
  removeCart,
  manageQuantity,
} = ProductSlice.actions;
export default ProductSlice.reducer;