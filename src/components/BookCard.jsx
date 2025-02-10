import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";

export default function BookCategory() {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setBooks([]);
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://gutendex.com/books?topic=${category.toLowerCase()}`
        );
        const data = await response.json();
        console.log(data.results);
        setBooks([...data.results]);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchBooks();
    loadFavorites(); // Load favorites when category changes
  }, [category]);

  // Helper functions for localStorage
  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getFromLocalStorage = (key) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  };

  // Load favorites from local storage
  const loadFavorites = () => {
    setFavorites(getFromLocalStorage("favorites"));
  };

  // Add book to favorites
  const addToFavorites = (book) => {
    const updatedFavorites = [...favorites, book];
    setFavorites(updatedFavorites);
    saveToLocalStorage("favorites", updatedFavorites);
  };

  // Remove book from favorites
  const removeFromFavorites = (bookId) => {
    const updatedFavorites = favorites.filter((book) => book.id !== bookId);
    setFavorites(updatedFavorites);
    saveToLocalStorage("favorites", updatedFavorites);
  };

  return (
    <div className="bookCards">
      <p>{books.length === 0 ? "Loading..." : ""}</p>
      {books &&
        books.map((book) => (
          <div key={book.id}>
            <BookCard bookData={book} />
            <button onClick={() => addToFavorites(book)}>
              Add to Favorites
            </button>
            <button onClick={() => removeFromFavorites(book.id)}>
              Remove from Favorites
            </button>
          </div>
        ))}
    </div>
  );
}
