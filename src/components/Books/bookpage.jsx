import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookPage() {
  const { id } = useParams(); // Get the book ID from the URL
  const [bookDetail, setBookDetail] = useState(null); // State to store book details

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        console.log("Fetching book with ID:", id);
        const response = await fetch(`https://gutendex.com/books/${id}/`);
        const data = await response.json();
        console.log("API Response:", data);

        if (data) {
          setBookDetail(data);
        } else {
          setBookDetail(null);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };

    if (id) {
      fetchBookDetail();
    }
  }, [id]);

  if (!bookDetail) {
    return <p>Loading...</p>;
  }

  const {
    title,
    authors,
    download_count,
    languages,
    formats,
    subjects,
    summaries,
  } = bookDetail;

  console.log("Book details:", {
    title,
    authors,
    download_count,
    languages,
    formats,
    subjects,
    summaries,
  });

  return (
    <div className="bookDetail">
      <h2>{title}</h2>

      {formats && formats["image/jpeg"] && (
        <img src={formats["image/jpeg"]} alt={title} />
      )}

      <p>
        <strong>Author:</strong>{" "}
        {authors && authors.length > 0
          ? authors[0]?.name || "No info available"
          : "No info available"}
      </p>

      <p>
        <strong>Downloads:</strong> {download_count || "No info available"}
      </p>

      <p>
        <strong>Categories:</strong>{" "}
        {subjects?.join(", ") || "No info available"}
      </p>

      <p>
        <strong>Languages:</strong>{" "}
        {languages?.join(", ") || "No info available"}
      </p>

      <p>
        <strong>Summary:</strong>{" "}
        {summaries && summaries.length > 0
          ? summaries[0]
          : "No summary available"}
      </p>

      {formats && formats["text/html"] && (
        <button
          className="detailButton"
          onClick={() => window.open(formats["text/html"], "_blank")}
        >
          Read this book
        </button>
      )}
    </div>
  );
}
