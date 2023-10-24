import { configureStore } from "@reduxjs/toolkit";
import rootSlices from "./slices";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: rootSlices,
  devTools: true,
});

export const wrapper = createWrapper(store, { debug: true });
