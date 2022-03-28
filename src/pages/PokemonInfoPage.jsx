import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/Pokemon/Pokemon.scss";
//import promiseHelper from "../helper/promise";

const baseUrl = "https://pokeapi.co/api/v2/";
const baseImgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

function PokemonCard() {
  const [pokemon, setPokemon] = useState();
  const [pokemonImg, setPokemonImg] = useState();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const pokemonId = parseInt(urlParams.get("id")) + 1;

  useEffect(() => {
    const fetchPokemon = async () => {
      const promises = [
        axios.get(`${baseUrl}pokemon/${pokemonId}`),
        axios.get(`${baseUrl}pokemon-species/${pokemonId}`),
        axios.get(`${baseUrl}language/`)
      ];
      const [_pokemon, _species] = await Promise.all(promises);

      let pokemonDescription = _species.data.flavor_text_entries.filter(
        (flavor) => flavor.language.name === "en"
      );

      setPokemon({
        ..._pokemon.data,
        ..._species.data,
        description:
          pokemonDescription[pokemonDescription.length - 1].flavor_text
      });

      setPokemonImg(baseImgUrl + pokemonId + ".png");
    };
    fetchPokemon();
  }, []);

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
