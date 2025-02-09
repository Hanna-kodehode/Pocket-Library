import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dropdown.css";

export default function Dropdown() {
  const navigate = useNavigate();

  const categories = [
    "Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Fantasy",
    "Morality",
    "Society",
    "Power",
    "Justice",
    "Adventure",
    "Tragedy",
    "War",
    "Philosophy",
  ];

  const [dropdownToggled, setDropdownToggled] = useState(false);

  return (
    <>
      <div className="categoryDropdown">
        <button
          className="toggleCategories"
          onClick={() => setDropdownToggled(!dropdownToggled)}
        >
          Book categories
        </button>
        <div className={`categoryOptions ${dropdownToggled ? "visible" : ""}`}>
          {categories.map((category, id) => (
            <button key={id} onClick={() => navigate(`/category/${category}`)}>
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

{
  /* <Link to={`/category/${category}`}>{category}</Link>; */
}
