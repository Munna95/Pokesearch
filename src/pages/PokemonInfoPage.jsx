import React, { useState } from "react";
import axios from "axios";
import "../components/Pokemon/Pokemon.scss";
import promiseHelper from "../helper/promise";

const baseUrl = "https://pokeapi.co/api/v2/";
const pokemonBaseImgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

function PokemonCard() {
  const lastPokedexEntry = 897;
  const [pokemon, setPokemon] = useState();
  const [pokemonImg, setPokemonImg] = useState();
  const [language, setLanguageList] = useState();

  function generateRandomId(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  const onPokemonSearchClick = async () => {
    let pokemonId = generateRandomId(lastPokedexEntry);

    const promises = [
      axios.get(`${baseUrl}pokemon/${pokemonId}`),
      axios.get(`${baseUrl}pokemon-species/${pokemonId}`),
      axios.get(`${baseUrl}language/`)
    ];

    const [_pokemon, _species, _languages] = await Promise.all(promises);

    /*     const [_pokemon, pokemonErr] = await promiseHelper(
      axios.get(`${baseUrl}pokemon/${pokemonId}`)
    );
    if (pokemonErr) {
      console.error("Cannot get Pokemon data");
      return;
    }

    const [_species, speciesErr] = await promiseHelper(
      axios.get(`${baseUrl}pokemon-species/${pokemonId}`)
    );
    if (speciesErr) {
      console.error("Cannot get species data");
      return;
    }

    const [_languages, languagesErr] = await promiseHelper(
      axios.get(`${baseUrl}language/`)
    );
    if (languagesErr) {
      console.error("Cannot get language");
      return;
    } */

    setLanguageList(_languages.data);

    let pokemonDescription = _species.data.flavor_text_entries.filter(
      (flavor) => flavor.language.name === "en"
    );

    setPokemon({
      ..._pokemon.data,
      ..._species.data,
      description: pokemonDescription[pokemonDescription.length - 1].flavor_text
    });

    setPokemonImg(pokemonBaseImgUrl + pokemonId + ".png");
    console.log(pokemon);
    /*try {
      let pokemonId = generateRandomId(lastPokedexEntry);
      const response = await axios.get(pokemonBaseUrl + pokemonId);
      setPokemon(response.data);
      setPokemonImg(pokemonBaseImgUrl + pokemonId + ".png");
    } catch (error) {
      console.error("Te salio mal");
    }
  };

  const myPromise = () => {
    return new Promise((resolve, reject) => {
      if (nro % 2 == 0) resolve(true);
      else reject(false);
    });*/
  };

  return (
    <div className="pokemonCard">
      {pokemon && (
        <>
          <div className="idTag">#{pokemon.id}</div>

          <h2>{pokemon.name}</h2>

          <div className="imgDescriptionCard">
            <img src={pokemonImg} className="artworkImg" alt=""></img>
            <p className="pokemonDescription">{pokemon.description}</p>
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

/* 

  const onPokemonSearchClick = async () => {

      obtener pokemon
      si crasheo tirar error
      validar que exista el objeto species
      obtener species
      si crasheo tirar error 

      try {
      let pokemonId = generateRandomId(lastPokedexEntry);
      const response = await axios.get(pokemonBaseUrl + pokemonId);
      setPokemon(response.data);
     setPokemonImg(pokemonBaseImgUrl + pokemonId + ".png");
    } catch (error) {
      console.error("Te salio mal");
    }
  };

*/
