import { createSlice } from "@reduxjs/toolkit";
import { books } from "./Data";
import { act } from "react-dom/test-utils";

const booksSlice = createSlice({
  name: "books",
  initialState: books,
  reducers: {
    setBooks: (state, action) => {
      const updatedBooks = action.payload.map((book) => ({
        ...book,
        isFavorite: false,
      }));
      return updatedBooks;
    },
    resetBooks: (state) => {
      return books;
    },
    addNewBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.splice(action.payload, 1);
    },
    editBook: (state, action) => {
      const editedBook = action.payload;
      return books.map((b) =>
        b.id === action.payload.id
          ? {
              ...b,
              title: editedBook.title,
              author: editedBook.author,
              releaseDate: editedBook.releaseDate,
            }
          : b
      );
    },
    addBookToFavorite: (state, action) => {
      const { bookId } = action.payload;
      return state.map((book) =>
        book.id === bookId ? { ...book, isFavorite: true } : book
      );
    },
    removeBookFromFavorite: (state, action) => {
      const { bookId } = action.payload;
      return state.map((book) =>
        book.id === bookId
          ? {
              ...book,
              isFavorite: false,
            }
          : book
      );
    },
  },
});

export const {
  setBooks,
  resetBooks,
  addNewBook,
  deleteBook,
  editBook,
  removeBookFromFavorite,
  addBookToFavorite,
} = booksSlice.actions;

export default booksSlice.reducer;
