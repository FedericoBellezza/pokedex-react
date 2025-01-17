import { useEffect, useState } from "react";
import PokeContext from "../context/PokeContext";
import Card from "../components/Card";

export default function Pokedex() {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setPokedex(data.results);
      });
  }, []);

  return (
    <PokeContext.Provider value="Pokedex">
      <div className="text-center  fs-5 m-5">
        <h1 className="page-title">Pokedex</h1>
      </div>
      <div className="row g-3 mb-5">
        {pokedex &&
          pokedex.map((pokemon) => (
            <Card pokemon={pokemon} key={pokemon.name}></Card>
          ))}
      </div>
    </PokeContext.Provider>
  );
}
