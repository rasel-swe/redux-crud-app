import { createSlice } from "@reduxjs/toolkit";
const initialBooks = {
  books: [
    {
      id: 1,
      title: "Dayaal",
      author: "Humayun Ahmed",
    },
    {
      id: 2,
      title: "Dayaal",
      author: "Humayun Ahmed",
    },
    {
      id: 3,
      title: "Dayaal",
      author: "Humayun Ahmed",
    },
    {
      id: 4,
      title: "Dayaal",
      author: "Humayun Ahmed",
    },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isExitBook = state.books.filter((book) => book.id === id);
      if (isExitBook) {
        isExitBook[0].title = title;
        isExitBook[0].author = author;
      }
    },
  },
});

export const { showBooks, addBook, deleteBook , updateBook} = bookSlice.actions;
export default bookSlice.reducer;
