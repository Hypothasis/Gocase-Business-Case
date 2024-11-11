import './SearchBar.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSearch }) {
  const [pokemonSearchName, setPokemonSearchName] = useState('');

  SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(pokemonSearchName);
    }
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Enter Pokémon Name"
        value={pokemonSearchName}
        onChange={(e) => setPokemonSearchName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="search-button"
        onClick={() => onSearch(pokemonSearchName)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
