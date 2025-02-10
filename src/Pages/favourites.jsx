import { useState, useEffect } from "react";
import FavouriteCards from "../components/FavouriteCards";

export default function Favourites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const getFromLocalStorage = (key) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  };

  const loadFavorites = () => {
    setFavorites(getFromLocalStorage("favorites"));
  };

  const removeFromFavorites = (bookId) => {
    const updatedFavorites = favorites.filter((book) => book.id !== bookId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favDiv">
      {favorites.length === 0 ? <p>No favorites yet!</p> : ""}
      {favorites.map((book) => (
        <div key={book.id}>
          <FavouriteCards
            bookData={book}
            removeFromFavorites={removeFromFavorites}
          />
        </div>
      ))}
    </div>
  );
}
