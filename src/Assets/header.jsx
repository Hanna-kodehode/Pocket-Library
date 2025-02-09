import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/Dropdown/dropdown.jsx";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="nav">
        <button onClick={() => navigate("/")}>Home</button>

        <DropDown />

        <button onClick={() => navigate("/favourites")}>Favourites</button>
      </nav>
    </header>
  );
}
