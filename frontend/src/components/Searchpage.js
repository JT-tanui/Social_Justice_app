import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SearchPage.css';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?query=${query}`);
      setResults(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="search-page">
      <h1>Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for petitions..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map(result => (
          <li key={result._id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;