import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <div class="navbar-nav m-auto p-2">
          <Link to="/" className="link text-decoration-none">
            Home
          </Link>
          <Link to="add-book" className="link text-decoration-none mx-3">
            Add book
          </Link>
          <Link to="fav-books" className="link text-decoration-none">
            Favorite books
          </Link>
      
        </div>
        <Link to="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search float-end link "
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </Link>
      </div>
    </nav>
  );
};
