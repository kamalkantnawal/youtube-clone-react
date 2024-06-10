import { createSlice } from "@reduxjs/toolkit";
import { dset } from "dset";

const initialState = {
  cacheSearchResult: {},
  livechatmessage: [],
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
    chatData: (state, action) => {
      const { path, value } = action.payload;
      return dset(state, path, value);
    },
  },
});

export const { cacheResults, chatData } = ProjectInfo.actions;
export default ProjectInfo.reducer;
