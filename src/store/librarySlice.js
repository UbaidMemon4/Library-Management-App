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
    updateBook: (state, action) => {
      const bookDetail = action.payload;
      state.books = state.books.map((b) =>
        b.id === bookDetail.id ? { ...bookDetail } : b
      );
      localStorage.setItem("books", JSON.stringify(state.books));
    },
    deleteBook: (state, action) => {
      const dltbokDetail = action.payload;
      state.books = state.books.filter((o) => o.id !== dltbokDetail);
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
    updateShelve: (state, action) => {
      const shelveDetail = action.payload;
      state.shelves = state.shelves.map((b) =>
        b.id === shelveDetail.id ? { ...shelveDetail } : b
      );
      localStorage.setItem("shelves", JSON.stringify(state.shelves));
    },
    deleteshelve: (state, action) => {
      const dltsheDetail = action.payload;
      state.shelves = state.shelves.filter((o) => o.id !== dltsheDetail);
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
    updateAuthor: (state, action) => {
      const authorDetail = action.payload;
      state.author = state.author.map((b) =>
        b.id === authorDetail.id ? { ...authorDetail } : b
      );
      localStorage.setItem("author", JSON.stringify(state.author));
    },
    deleteAuthor: (state, action) => {
      const dltautDetail = action.payload;
      state.author = state.author.filter((o) => o.id !== dltautDetail);
      localStorage.setItem("author", JSON.stringify(state.author));
    },
  },
});

export const {
  loginUser,
  logout,
  addBook,
  addShelve,
  addAuthor,
  updateBook,
  deleteBook,
  updateShelve,
  deleteshelve,
  updateAuthor,
  deleteAuthor,
} = libraySlice.actions;
export default libraySlice.reducer;
