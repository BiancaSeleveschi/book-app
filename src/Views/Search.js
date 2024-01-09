import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetBooks } from "../redux/BooksReducer";
import { BookList } from "../Components/BookList";

export const Search = () => {
  const books = useSelector((state) => state.books);
  const [searchedBook, setSearchedBook] = useState("");
  const dispatch = useDispatch();
  const [searchedBooks, setSearchedBooks] = useState([]);

  const searchBook = () => {
    setSearchedBooks(
      books.filter(
        (b) =>
          b.title.toLowerCase().includes(searchedBook.toLocaleLowerCase()) ||
          b.author.toLowerCase().includes(searchedBook.toLocaleLowerCase())
      )
    );
    dispatch(resetBooks(searchedBooks));
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchBook();
    }
  };
  return (
    <div>
      <h3 className="p-5">Search</h3>
      
      <input
        value={searchedBook}
        onChange={(e) => setSearchedBook(e.target.value)}
        placeholder="Search book"
        type="text"
        onKeyDown={handleKeyPress}
        className="shadow p-2 mb-4 bg-light rounded border-warning no-outline"
      />
      <button className="btn btn-dark d-block m-auto" onClick={searchBook}>
        Search
      </button>
      <BookList books={searchedBooks} />
    </div>
  );
};
