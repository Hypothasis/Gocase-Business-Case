export const API_URL = 'http://localhost:3000/api/v2';
// export const API_URL = 'https://pokeapi-jlft.onrender.com/api/v2';

export function GET_POKEMON(pokemonName) {
  return {
    url: `${API_URL}/pokemon/${pokemonName}`,
    options: {
      method: 'GET',
    },
  };
}
