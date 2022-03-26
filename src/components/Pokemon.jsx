import React, { useState } from "react";
import axios from "axios";
import "./Pokemon.css";

const pokemonBaseUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemonBaseImgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
let pokemonId = 1;

function PokemonCard() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonImg, setPokemonImg] = useState([]);

  const handleClick = async () => {
    try {
      const response = await axios.get(pokemonBaseUrl + pokemonId);
      setPokemon(response.data);
      setPokemonImg(pokemonBaseImgUrl + pokemonId + ".png");
    } catch (error) {
      console.error("Te salio mal");
    }
  };

  return (
    <div className="pokemonCard">
      <button className="button" onClick={handleClick}>
        TEST
      </button>
      <h2>
        {pokemon.name}
      </h2>
      <img src={pokemonImg} className="artworkImg" alt=""></img>
      <div className="infoCard">
      <ul>
        <li>Weight: {pokemon.weight}</li>
        <li>Height: {pokemon.height}</li>
      </ul>
      </div>
    </div>
  );
}

export default PokemonCard;
