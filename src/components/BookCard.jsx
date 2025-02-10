import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BookCard({ bookData }) {
  // Eksempel på bruk av context inne i denne funksjonen, etter context er satt opp. Husk import av useContext og bookFavoritesContext
  //const bookFavorites = useContext(bookFavoritesContext)
  // bookContext.addFavorite(bookData.id)
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    console.log(bookData);
    setImageURL(bookData.formats["image/jpeg"]);
  }, []);

  return (
    <>
      <Link to={`/book/${bookData.id}`}>
        {imageURL && <img src={`${imageURL}`}></img>}
        <p>{bookData.title}</p>
      </Link>
    </>
  );
}
