import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar/searchBar.jsx"; // Correct the import path
import DropDown from "../components/Dropdown/dropdown.jsx";

export default function Header() {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/search?query=${query}`);
  };

  return (
    <header>
      <nav className="nav">
        <button onClick={() => navigate("/")}>Home</button>

        <SearchBar onSearch={handleSearch} />

        <DropDown />

        <button onClick={() => navigate("/favourites")}>Favourites</button>
      </nav>
    </header>
  );
}
