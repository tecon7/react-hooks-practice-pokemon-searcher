import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import {useState, useEffect} from "react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => setPokemonList(data))
  }, [])


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}/>
      <br />
      <PokemonCollection 
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        searchQuery={searchQuery}/>
    </Container>
  );
}

export default PokemonPage;
