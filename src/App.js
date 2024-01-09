import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Views/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookForm } from "./Views/BookForm";
import { FavoriteBooks } from "./Views/FavoriteBooks";
import { Search } from "./Views/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="add-book" element={<BookForm />}></Route>
          <Route path="fav-books" element={<FavoriteBooks/>}></Route>
          <Route path="search" element={<Search/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
