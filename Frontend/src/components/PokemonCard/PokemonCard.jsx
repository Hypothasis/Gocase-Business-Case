import PropTypes from 'prop-types';
import './PokemonCard.css';

function PokemonCard({ pokemonName, pokemonSprite, pokemonAbilities, error }) {
  return (
    <div className="card">
      {pokemonSprite && (
        <div className="upper-container">
          <div className="sprite-container">
            <img className="sprite" src={pokemonSprite} alt={pokemonName} />
          </div>
          <h2>{pokemonName}</h2>
        </div>
      )}
      {pokemonAbilities.length > 0 && (
        <div className="abilities-container">
          <ul>
            {pokemonAbilities.map((ability, index) => (
              <li key={index}>{ability}</li>
            ))}
          </ul>
        </div>
      )}
      {error ? (
        <div className="error-container">
          <img
            className="error-image"
            src="https://imgur.com/MGh60KR.png"
            alt="No Results"
          />
          Invalid Pokémon!
        </div>
      ) : null}
    </div>
  );
}

PokemonCard.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  pokemonSprite: PropTypes.string.isRequired,
  pokemonAbilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.string,
};

export default PokemonCard;
