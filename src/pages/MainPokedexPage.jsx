import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/Pokemon/PokemonList.scss";

function MainPokedexPage() {
  const [pokedex, setPokedex] = useState([]);

  const getPokedex = async () => {
    const _pokedex = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=898`
    );

    setPokedex(_pokedex.data.results);
  };

  useEffect(() => {
    getPokedex();
  }, []);

  return (
    <div className="home">
      <title>Welcome to PokéSearch</title>
      <div className="pokedex">
        <ul className="pokemonList">
          {pokedex &&
            pokedex.map((pokemon, id) => (
              <li className="listElement">
                <a
                  href={`http://localhost:3000/pokemon-info?id=${id}`}
                  className="pokemonLink"
                >
                  {pokemon.name}
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${
                      id + 1
                    }.png`}
                    alt=""
                    className="pokemonImg"
                  />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default MainPokedexPage;
