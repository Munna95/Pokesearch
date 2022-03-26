import React, { useState } from "react";
import axios from "axios";
import "./Pokemon.scss";

const pokemonBaseUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemonBaseImgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

function PokemonCard() {
  const lastPokedexEntry = 897;
  const [pokemon, setPokemon] = useState();
  const [pokemonImg, setPokemonImg] = useState();

  function generateRandomId(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  const onPokemonSearchClick = async () => {
    try {
      let pokemonId = generateRandomId(lastPokedexEntry);
      const response = await axios.get(pokemonBaseUrl + pokemonId);
      setPokemon(response.data);
      setPokemonImg(pokemonBaseImgUrl + pokemonId + ".png");
    } catch (error) {
      console.error("Te salio mal");
    }
  };

  return (
    <div className="pokemonCard">
      {pokemon && (
        <>
          <div className="idTag">
            #{pokemon.id}
          </div>
          <h2>{pokemon.name}</h2>
          <img src={pokemonImg} className="artworkImg" alt=""></img>
          <div className="infoCard">
            <ul>
              <li>Weight: {pokemon.weight}</li>
              <li>Height: {pokemon.height}</li>
              <li></li>
            </ul>
          </div>
        </>
      )}
      <button className="button" onClick={onPokemonSearchClick}>
        Random
      </button>
    </div>
  );
}

export default PokemonCard;
