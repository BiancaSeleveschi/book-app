import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteBook,
  removeBookFromFavorite,
  addBookToFavorite,
  editBook,
} from "../redux/BooksReducer";

export const BookList = (props) => {
  const { books } = props;
  const commonStyles = "w-25 bg-primary border rounded-3 m-auto my-4";
  const dispatch = useDispatch();
  const [indexEditedBook, setIndexEditedBook] = useState(-1);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedAuthor, setEditedAuthor] = useState("");
  const [editedReleaseDate, setEditedReleaseDate] = useState("");

  const handleddBookToFavorite = (bookId) => {
    dispatch(addBookToFavorite({ bookId: bookId }));
  };

  const handleRemoveBookFromFavorite = (bookId) => {
    dispatch(removeBookFromFavorite({ bookId: bookId }));
  };
  const handleDeleteBook = (bookId) => {
    let index = books.findIndex((book) => book.id === bookId);
    dispatch(deleteBook(index));
  };
  const openCardForEditting = (book) => {
    let index = books.findIndex((b) => b.id === book.id);
    setEditedTitle(book.title);
    setEditedAuthor(book.author);
    setEditedReleaseDate(book.releaseDate);
    setIndexEditedBook(indexEditedBook !== index ? index : -1);
  };
  const handleEditBook = (book) => {
    let editedBook = {
      id: book.id,
      title: editedTitle,
      author: editedAuthor,
      releaseDate: editedReleaseDate,
    };
    dispatch(editBook(editedBook));
    setIndexEditedBook(-1);
  };
  return (
    <div>
      {books.map((book, index) => (
        <div
          key={index}
          className={`${commonStyles} ${
            book.releaseDate > 2000 ? "bg-success" : "bg-warning"
          }`}
        >
          {book.isFavorite ? (
            <svg
              onClick={() => {
                handleRemoveBookFromFavorite(book.id);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              role="button"
              className="bi bi-star-fill text-dark float-end mt-2 me-2"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          ) : (
            <svg
              onClick={() => {
                handleddBookToFavorite(book.id);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              role="button"
              className="bi bi-star text-dark float-end mt-2 me-2"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
            </svg>
          )}
          <svg
            onClick={() => {
              openCardForEditting(book);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            role="button"
            className="bi bi-pencil text-dark float-end mt-2 me-2"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
          </svg>
          {indexEditedBook !== index ? (
            <div>
              <h5 className="text-light py-2 ps-3 d-flex w-100">
                Title: {book.title}
              </h5>
              <p className="d-flex w-100 ps-3">
                Author: <span className="fw-bold ms-1"> {book.author}</span>
              </p>
              <p className="d-flex ps-3">
                Release date:
                <span
                  className={
                    book.releaseDate > 2000
                      ? "text-danger fw-bold ms-1"
                      : "text-primary fw-bold ms-1"
                  }
                >
                  {book.releaseDate}
                </span>
              </p>
              <button
                onClick={() => {
                  handleDeleteBook(book.id);
                }}
                className="btn btn-danger mb-3"
              >
                Delete
              </button>
            </div>
          ) : (
            <div>
              <p className="pgf-edited text-start mt-5 ms-3">Title</p>
              <input
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                placeholder="Title"
                type="text"
                className="d-block ms-3"
              />
              <p className="pgf-edited text-start mt-2 ms-3">Author</p>
              <input
                value={editedAuthor}
                onChange={(e) => setEditedAuthor(e.target.value)}
                placeholder="Author"
                type="text"
                className="d-block mb-2 ms-3"
              />
              <p className="pgf-edited text-start ms-3">Release date</p>
              <input
                value={editedReleaseDate}
                onChange={(e) => setEditedReleaseDate(e.target.value)}
                placeholder="Release date"
                type="text"
                className="d-block ms-3"
              />
              <button
                onClick={() => {
                  handleEditBook(book);
                }}
                className="btn btn-primary m-4"
              >
                Save
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
