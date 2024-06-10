import { createSlice } from "@reduxjs/toolkit";

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
      state.livechatmessage.splice(15, 2);
      state.livechatmessage.push(action.payload);
    },
  },
});

export const { cacheResults, chatData } = ProjectInfo.actions;
export default ProjectInfo.reducer;
