import { createSlice } from "@reduxjs/toolkit";
    const id =JSON.parse(localStorage.getItem("login"));

export const libraySlice = createSlice({
  name: "library",
  initialState: {
    user: id,
    books: [],
    shelves: [],
    author: [],
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("login", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logout } = libraySlice.actions;
export default libraySlice.reducer;
