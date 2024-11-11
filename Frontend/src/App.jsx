import { useState } from 'react';
import './App.css';
import { GET_POKEMON } from '../api';
import SearchBar from './components/SearchBar/SearchBar';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';
import PokemonCard from './components/PokemonCard/PokemonCard';

function App() {
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonSprite, setPokemonSprite] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemonData = async (pokemonSearchName) => {
    try {
      setLoading(true);
      setError(null);

      const { url, options } = GET_POKEMON(pokemonSearchName.toLowerCase());
      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) {
        throw new Error('Pokémon not found');
      }

      const { name, abilities, sprite } = json;

      setPokemonAbilities(abilities);
      setPokemonSprite(sprite);
      setPokemonName(name);
    } catch (err) {
      setPokemonAbilities([]);
      setPokemonSprite('');
      setPokemonName('');
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={fetchPokemonData} />
      {loading && <LoadingIndicator />}
      {!pokemonSprite && !pokemonAbilities.length && !error ? null : (
        <PokemonCard
          pokemonName={pokemonName}
          pokemonSprite={pokemonSprite}
          pokemonAbilities={pokemonAbilities}
          error={error}
        />
      )}
    </div>
  );
}

export default App;
