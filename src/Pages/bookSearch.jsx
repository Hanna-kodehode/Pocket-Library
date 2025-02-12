import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Header from "../Assets/header";
import Footer from "../Assets/footer";

export default function BookSearch() {
  const { page } = useParams();
  const query = new URLSearchParams(useLocation().search).get("query");
  const [books, setBooks] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query && page) {
      fetchBooks(page);
    }
  }, [query, page]);

  const fetchBooks = async (pageNumber) => {
    const response = await fetch(
      `https://gutendex.com/books/?search=${query}&page=${pageNumber}`
    );
    const data = await response.json();
    setBooks(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
  };

  const goToPage = (newPage) => {
    navigate(`/search/${newPage}?query=${query}`);
  };

  return (
    <>
      <Header />
      <div>
        <h1>Search results for: "{query}"</h1>
        <div>
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book.id}>
                <h2>{book.title}</h2>
                <p>{book.authors.map((a) => a.name).join(", ")}</p>
              </div>
            ))
          ) : (
            <p>No books found :c</p>
          )}
        </div>
        <div>
          <button
            onClick={() => goToPage(Number(page) - 1)}
            disabled={!prevPage}
          >
            Previous
          </button>
          <button
            onClick={() => goToPage(Number(page) + 1)}
            disabled={!nextPage}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
