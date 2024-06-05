import { configureStore } from "@reduxjs/toolkit";
import AppState from "./Reducers/AppState";

const store = configureStore({
  reducer: {
    appState: AppState,
  },
});
export default store;
