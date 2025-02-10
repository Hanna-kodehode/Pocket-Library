import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FavouriteCards({ bookData, removeFromFavorites }) {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    if (bookData.formats && bookData.formats["image/jpeg"]) {
      setImageURL(bookData.formats["image/jpeg"]);
    }
  }, [bookData]);

  return (
    <>
      <Link to={`/book/${bookData.id}`}>
        {imageURL && <img src={imageURL} alt={bookData.title} />}
        <p>{bookData.title}</p>
        <p>
          Author: {bookData.authors?.map((author) => author.name).join(", ")}
        </p>
      </Link>
    </>
  );
}
