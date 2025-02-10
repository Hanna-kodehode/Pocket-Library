import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";

export default function BookCategory() {
  return (
    <div className="bookCards">
      <BookCard key={book.id} book={book} />
    </div>
  );
}
