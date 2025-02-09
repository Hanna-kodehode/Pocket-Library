import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import BookCard from "../components/BookCard.jsx";

export default function BookCategory() {
  const { category } = useParams();
  const [books, setBooks] = useState([]);

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
  }, [category]);

  return (
    <>
      <div className="bookCards">
        <p>{books.length == 0 ? "Loading..." : ""}</p>
        {books &&
          books.map((book) => {
            return <BookCard key={book.id} bookData={book} />;
          })}
      </div>
    </>
  );
}
