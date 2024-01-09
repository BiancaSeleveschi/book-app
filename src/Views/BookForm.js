import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewBook, setBooks } from "../redux/BooksReducer";
import { useNavigate } from "react-router-dom";
export const BookForm = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState("");
  const [showTitleAlert, setShowTitleAlert] = useState(false);
  const [showAuthorAlert, setShowAuthorAlert] = useState(false);
  const [showreleaseDateAlert, setShowReleaseDateAlert] = useState(false);

  const handleAddNewBook = () => {
    let newBook = {
      id: books.length,
      title: newTitle,
      author: newAuthor,
      releaseDate: newReleaseDate,
    };
    setShowTitleAlert(newTitle === "");
    setShowAuthorAlert(newAuthor === "");
    setShowReleaseDateAlert(newReleaseDate === "");
    if (newTitle !== "" && newAuthor !== "" && newReleaseDate !== "") {
      setShowTitleAlert(false);
      setShowAuthorAlert(false);
      setShowReleaseDateAlert(false);
      dispatch(addNewBook(newBook));
      navigate("/");
    }
  };

  return (
    <div className="border rounded-4 w-50 m-auto my-5 py-5 bg-dark">
      <h2 className="p-5 text-white">Add book</h2>
      <input
        className="d-flex m-auto my-2"
        type="text"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      {showTitleAlert && (
        <span className="text-danger me-5 pe-5">Add a title</span>
      )}
      <input
        className="d-flex m-auto my-2"
        type="text"
        placeholder="Author"
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
      />
      {showAuthorAlert && (
        <span className="text-danger me-5 pe-5">Add a title</span>
      )}

      <input
        className="d-flex m-auto my-2"
        type="number"
        placeholder="Release Date"
        value={newReleaseDate}
        onChange={(e) => setNewReleaseDate(e.target.value)}
      />
      {showreleaseDateAlert && (
        <span className="text-danger me-5 pe-5 d-block">Add a title</span>
      )}

      <button onClick={handleAddNewBook} className="btn btn-primary my-5">
        Add
      </button>
    </div>
  );
};
