import React, { useState } from 'react';
import { Pokemon } from './pokemon';
import { useGetPokemonByNameQuery } from './services/pokemon';

const pokemonList = ['bulbasaur', 'pikachu', 'ditto', 'ivysaur', 'venusaur', 'charmander'];

export default function Api() {
  const [selectedPokemon, setSelectedPokemon] = useState('');

  const handlePokemonChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  return (
    <div className="App">
      <select onChange={handlePokemonChange}>
        <option value="">Select a Pokémon</option>
        {pokemonList.map((poke, index) => (
          <option key={index} value={poke}>
            {poke}
          </option>
        ))}
      </select>
      <div>
        {selectedPokemon && (
          <Pokemon key={selectedPokemon} name={selectedPokemon} pollingInterval={0} />
        )}
        
      </div>
    </div>
  );
}
