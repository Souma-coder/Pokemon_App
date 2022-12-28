import "./App.css";
import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";
import PokemonFullData from "./PokemonFullData";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState(null);
  let [POKEMON_NAME] = pokemonName;

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });

    return () => {
      cancel();
    };
  }, [currentPageUrl]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${POKEMON_NAME}`)
      .then((response) => setPokemonData(response.data))
      .catch((error) => console.log(error));
  }, [POKEMON_NAME]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPreviousPage() {
    setCurrentPageUrl(previousPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <img
            src="logos/pokemon-logo-main.jpg"
            className="pokemon-head-logo"
            alt="pokemon-heading"
          />
        </div>
        <div className="row">
          <div className="col-6">
            <Pagination
              gotoNextPage={nextPageUrl ? gotoNextPage : null}
              gotoPreviousPage={previousPageUrl ? gotoPreviousPage : null}
            />
            <PokemonList
              pokemon={pokemon}
              pokemonName={pokemonName}
              setPokemonName={setPokemonName}
            />
          </div>
          <div className="col-6">
            {pokemonData ? (
              <PokemonFullData data={pokemonData} />
            ) : (
              <img
                src="logos/pokemon-card-back.png"
                className="pokemon-card-back"
                alt="pokemon-card-back"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
