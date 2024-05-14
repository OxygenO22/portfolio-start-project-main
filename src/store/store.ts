import { configureStore } from "@reduxjs/toolkit";
import  openCloseBurgerMenuReducer  from "./burgerMenu/BurgerMenuSlice";

export const store = configureStore({
  reducer: {
    burgerMenu: openCloseBurgerMenuReducer,
  },
  
});

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;