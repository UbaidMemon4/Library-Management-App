import { createSlice } from "@reduxjs/toolkit";
    const user =JSON.parse(localStorage.getItem("login"));

export const libraySlice = createSlice({
  name: "library",
  initialState: {
    user: user,
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
    addBook:(state,action)=>{

    }
  },
});

export const { loginUser, logout,addBook } = libraySlice.actions;
export default libraySlice.reducer;
