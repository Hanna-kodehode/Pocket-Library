import Header from "../../Assets/header";
import Footer from "../../Assets/footer";

export default function BookPage() {
  return (
    <>
      <main>
        <div>
          <h3>
            {selectedCategory
              ? `Books in: ${selectedCategory}`
              : "Select a category"}
          </h3>
          <ul>
            {books.length > 0 ? (
              books.map((book) => (
                <li key={book.id}>
                  {book.title} - {book.authors.map((a) => a.name).join(", ")}
                </li>
              ))
            ) : (
              <p>No books found</p>
            )}
          </ul>
        </div>
      </main>
      ;
    </>
  );
}

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
