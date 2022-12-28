import React from "react";
import { PokemonTypes } from "./PokemonTypes";

const PokemonFullData = ({ data }) => {
  return (
    <div className="container-fluid border border-3 border-dark rounded-3 pokemon-card">
      <div className="row d-flex justify-content-center my-4">
        <img
          src={data.sprites.other.dream_world.front_default}
          alt={data.name}
          className="pokemon-data-image"
        />
      </div>
      <div className="row text-center">
        <h5>{data.name.toUpperCase()}</h5>
      </div>
      <div className="row text-center d-flex justify-content-center">
        {data.types.map((item) => {
          return (
            <span
              className="col-2 pokemon-type-data"
              style={PokemonTypes(item.type.name)}
            >
              {item.type.name.toUpperCase()}
            </span>
          );
        })}
      </div>
      <div className="row d-flex justify-content-center mt-2">
        <div className="col-2">Height</div>
        <div className="col-1">
          {parseInt(data.height / 3)}'{data.height % 3}"
        </div>
        /<div className="col-2">Weight</div>
        <div className="col-2">{data.weight / 10} kg</div>
      </div>
      <div className="row d-flex justify-content-center bg-dark text-light text-center mx-3 mt-3">
        <div className="col">Ability: </div>
        {data.abilities.map((item) => {
          return <div className="col">{item.ability.name}</div>;
        })}
      </div>
      <div className="row text-center d-flex justify-content-center my-3">
        <h5>States</h5>
        <div className="row my-1">
          <div className="col-4">HP</div>
          <div className="col-1 bg-danger text-light rounded-3 px-2">
            {data.stats[0].base_stat}
          </div>
          <div className="col-4">Special Attack</div>
          <div className="col-1 bg-warning text-light rounded-3 px-2">
            {data.stats[3].base_stat}
          </div>
        </div>
        <div className="row my-1">
          <div className="col-4">Attack</div>
          <div className="col-1 bg-success text-light rounded-3 px-2">
            {data.stats[1].base_stat}
          </div>
          <div className="col-4">Special Defence</div>
          <div className="col-1 bg-primary text-light rounded-3 px-2">
            {data.stats[4].base_stat}
          </div>
        </div>
        <div className="row my-1">
          <div className="col-4">Defence</div>
          <div className="col-1 bg-info text-light rounded-3 px-2">
            {data.stats[2].base_stat}
          </div>
          <div className="col-4">Speed</div>
          <div className="col-1 bg-secondary text-light rounded-3 px-2">
            {data.stats[5].base_stat}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonFullData;
