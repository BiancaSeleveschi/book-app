import React from "react";
import { BookList } from "../Components/BookList";
import { useSelector, useDispatch } from "react-redux";
import { setBooks, resetBooks } from "../redux/BooksReducer";

export const Home = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const sortBookByReleaseDate = () => {
    const sortedBooks = [...books].sort(
      (a, b) => a.releaseDate - b.releaseDate
    );
    dispatch(setBooks(sortedBooks));
  };
  const sortByTitle = () => {
    const sortedBooks = [...books].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    dispatch(setBooks(sortedBooks));
  };
  const sortByAuthor = () => {
    const sortedBooks = [...books].sort((a, b) =>
      a.author.localeCompare(b.author)
    );
    dispatch(setBooks(sortedBooks));
  };

  const handleResetBooks = () => {
    dispatch(resetBooks());
  };

  return (
    <div className="App">
      <h1 className="p-5">BOOKS</h1>
      <h4 className="py-4">Explore the books in ordered by:</h4>
      <button
        onClick={() => {
          sortByTitle("title");
        }}
        className="btn btn-danger px-5"
      >
        Title
      </button>
      <button
        onClick={() => {
          sortByAuthor("author");
        }}
        className="btn btn-secondary px-4 mx-3"
      >
        Author
      </button>
      <button
        onClick={() => {
          sortBookByReleaseDate("releaseDate");
        }}
        className="btn btn-primary "
      >
        Release date
      </button>
      <h5 className="pt-4">See the original list:</h5>
      <button onClick={handleResetBooks} className="btn btn-dark my-3">
        Original list
      </button>
      <BookList books={books} />
    </div>
  );
};
