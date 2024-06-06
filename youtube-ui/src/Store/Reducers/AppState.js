import { createSlice } from "@reduxjs/toolkit";
import { dset } from "dset";
const initialState = {
  toggleState: false,
  bodymarginoff: false,
};

export const AppState = createSlice({
  name: "AppState",
  initialState,
  reducers: {
    updateProperty: (state, action) => {
      const { path, value } = action.payload;
      return dset(state, path, value);
    },
  },
});

export const { updateProperty } = AppState.actions;

export default AppState.reducer;
