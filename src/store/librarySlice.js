import { createSlice } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("login"));
const books = JSON.parse(localStorage.getItem("books"));
export const libraySlice = createSlice({
  name: "library",
  initialState: {
    user: user,
    books: books || [],
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
    addBook: (state, action) => {
      const bookDet = {
        ...action.payload,
        id: Math.random(),
      };
      state.books.push(bookDet);
      localStorage.setItem("books", JSON.stringify(state.books));
    },
  },
});

export const { loginUser, logout, addBook } = libraySlice.actions;
export default libraySlice.reducer;
