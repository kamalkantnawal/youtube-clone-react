import { configureStore } from "@reduxjs/toolkit";
import AppState from "./Reducers/AppState";
import ProjectInfo from "./Reducers/ProjectInfo";

const store = configureStore({
  reducer: {
    appState: AppState,
    project: ProjectInfo,
  },
});
export default store;
