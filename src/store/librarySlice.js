import { createSlice } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("login"));
const books = JSON.parse(localStorage.getItem("books"));
const shelves = JSON.parse(localStorage.getItem("shelves"));
const author = JSON.parse(localStorage.getItem("author"));
export const libraySlice = createSlice({
  name: "library",
  initialState: {
    user: user,
    books: books || [],
    shelves: shelves || [],
    author: author || [],
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
    addShelve: (state, action) => {
      const shelve = {
        ...action.payload,
        id: Math.random(),
      };
      state.shelves.push(shelve);
      localStorage.setItem("shelves", JSON.stringify(state.shelves));
    },
    addAuthor: (state, action) => {
      const author = {
        ...action.payload,
        id: Math.random(),
      };
      state.author.push(author);
      localStorage.setItem("author", JSON.stringify(state.author));
    },
  },
});

export const { loginUser, logout, addBook, addShelve, addAuthor } =
  libraySlice.actions;
export default libraySlice.reducer;
