import React, { useState, useEffect } from "react";

export default function BookSearch({ initialQuery }) {
  const [query, setQuery] = useState(initialQuery || "");
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    if (query) {
      fetchBooks();
    }
  }, [query, page]);

  const fetchBooks = async () => {
    const response = await fetch(
      `https://gutendex.com/books/?search=${query}&page=${page}`
    );
    const data = await response.json();
    setBooks(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
  };

  return (
    <>
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.authors.map((a) => a.name).join(", ")}</p>
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={!prevPage}>
          Forrige
        </button>
        <button onClick={() => setPage(page + 1)} disabled={!nextPage}>
          Neste
        </button>
      </div>
    </>
  );
}
