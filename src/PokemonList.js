import React from "react";

export default function PokemonList({ pokemon, pokemonName, setPokemonName }) {
  return (
    <div className="container">
      <div className="row">
        {pokemon.map((item) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              key={item}
              className="offset-2 col-3 border border-1 rounded-3 p-2 my-1 text-center pokemon-item"
              onClick={() =>
                setPokemonName(
                  pokemon.filter((poke) => {
                    return poke === item;
                  })
                )
              }
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
