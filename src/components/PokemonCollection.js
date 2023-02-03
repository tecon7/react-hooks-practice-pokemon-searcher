import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonList, searchQuery}) {
  const filteredPokemonList = pokemonList.filter(pokemon => { 
    return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
  })
  return (
    <Card.Group itemsPerRow={6}>
      {filteredPokemonList.map(pokemon => {
        return <PokemonCard 
                  name={pokemon.name}
                  hp={pokemon.hp}
                  sprites={pokemon.sprites}/>
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
