import React, { useEffect, useState } from "react";
import axios from "axios";

function MainPokedexPage() {
  const [pokedex, setPokedex] = useState([]);

  const getPokedex = async () => {
    const _pokedex = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`
    );

    setPokedex(_pokedex.data.results);
  };

  useEffect(() => {
    getPokedex();
  }, []);

  return (
    <div className="home">
      <title>Wellcome to pokesearch</title>
      <div className="pokedex">
        <ul>
          {pokedex &&
            pokedex.map((pokemon, id) => (
              <li>
                <a href={`http://localhost:3000/pokemon-info?id=${id}`}>
                  {pokemon.name}
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${
                      id + 1
                    }.png`}
                    alt=""
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
