import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
        <input
            className="search-input"
            type="text"
            placeholder="Enter city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="search-button">
            Search
        </button>
    </form>
  );
}