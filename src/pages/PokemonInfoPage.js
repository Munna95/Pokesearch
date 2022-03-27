import React, { useState } from "react";
import axios from "axios";
import "../components/Pokemon/Pokemon.scss";

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
          <div className="idTag">#{pokemon.id}</div>

          <h2>{pokemon.name}</h2>

          <div className="imgDescriptionCard">
            <img src={pokemonImg} className="artworkImg" alt=""></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              eius ex nihil, magnam cupiditate obcaecati nostrum nobis vitae
              veniam voluptate quidem sunt illum, nesciunt, numquam facilis
              fugiat. Nam, doloribus adipisci.
            </p>
          </div>
          <div className="infoCard">
            <ul>
              <li>Weight: {pokemon.weight}</li>
              <li>Height: {pokemon.height}</li>
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
