import React from 'react'
import { useSelector } from 'react-redux'
import { BookList } from '../Components/BookList';

export const FavoriteBooks = () => {
    const books = useSelector((state) => state.books);
    const favoritebooks = books.filter((book) => book.isFavorite)
  return (
    <div>
        <BookList books={favoritebooks}/>
    </div>
  )
}
