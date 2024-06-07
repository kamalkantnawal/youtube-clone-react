import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cacheSearchResult: {},
};

export const ProjectInfo = createSlice({
  name: "UpdateProject",
  initialState,
  reducers: {
    cacheResults: (state, action) => {
      state.cacheSearchResult = Object.assign(
        state.cacheSearchResult,
        action.payload
      );
    },
  },
});

export const { cacheResults } = ProjectInfo.actions;
export default ProjectInfo.reducer;
