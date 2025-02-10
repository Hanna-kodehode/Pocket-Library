// Not in use atm

/*import { useState, useEffect } from "react";
import Header from "../../Assets/header";
import Footer from "../../Assets/footer";

function Books() {
  const [category, setCategory] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://gutendex.com/books?topic=${category.toLowerCase()}`
        );
        const data = await response.json();
        setBooks(data.results);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchBooks();
  }, [category]);

  return (
    <>
      <Header setCategory={setCategory} />

      <div className="main-content">
        {category && (
          <div>
            <h3>Books in the {category} Category:</h3>
            <Books books={books} />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Books;

// {
//   "id": <number of Project Gutenberg ID>,
//   "title": <string>,
//   "subjects": <array of strings>,
//   "authors": <array of Persons>,
//   "summaries": <array of strings>,
//   "translators": <array of Persons>,
//   "bookshelves": <array of strings>,
//   "languages": <array of strings>,
//   "copyright": <boolean or null>,
//   "media_type": <string>,
//   "formats": <Format>,
//   "download_count": <number>
// }
*/
