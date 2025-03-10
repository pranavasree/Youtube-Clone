// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./appSlice";

const store = configureStore({
  reducer: {
    app: toggleReducer,
  },
});

export default store;
