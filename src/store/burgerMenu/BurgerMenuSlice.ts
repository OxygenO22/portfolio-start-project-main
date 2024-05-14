import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const BurgerMenuSlice = createSlice({
  name: 'burgerMenu',
  initialState: {
    isBurgerMenuOpen: false
  },
  reducers: {
    openCloseBurgerMenu(state, action: PayloadAction<boolean>) {
      state.isBurgerMenuOpen === false ? state.isBurgerMenuOpen = true : state.isBurgerMenuOpen = false;
    }
  }, 
});

export const { openCloseBurgerMenu } = BurgerMenuSlice.actions;
export default BurgerMenuSlice.reducer;