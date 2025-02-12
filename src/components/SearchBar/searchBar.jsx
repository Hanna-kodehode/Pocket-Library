import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const GutendexApp = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, [page]);

  const fetchBooks = async () => {
    const response = await fetch(
      `https://gutendex.com/books/?search=${query}&page=${page}`
    );
    const data = await response.json();
    setBooks(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchBooks();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gutendex Bokapplikasjon</h1>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Søk etter bøker..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Søk</Button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <Card key={book.id}>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-500">
                {book.authors.map((a) => a.name).join(", ")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <Button onClick={() => setPage(page - 1)} disabled={!prevPage}>
          Forrige
        </Button>
        <Button onClick={() => setPage(page + 1)} disabled={!nextPage}>
          Neste
        </Button>
      </div>
    </div>
  );
};

export default GutendexApp;
