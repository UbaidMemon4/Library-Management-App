import { createSlice } from "@reduxjs/toolkit";

export const libraySlice = createSlice({
  name: "library",
  initialState: {
    user: null,
    books: [],
    shelves: [],
    author: [],
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logout } = libraySlice.actions;
export default libraySlice.reducer;
