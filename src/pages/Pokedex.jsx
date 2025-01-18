import { useEffect, useState } from "react";
import PokeContext from "../context/PokeContext";
import Card from "../components/Card";

export default function Pokedex() {
  // State to store the pokedex data and the search input
  const [pokedex, setPokedex] = useState([]);
  const [search, setSearch] = useState("");

  // Filtering the pokedex based on the search input
  const filteredPokedex = pokedex.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  // Fetching data from the API
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setPokedex(data.results);
        console.log(data);
      });
  }, []);

  // - Rendering the pokedex
  return (
    <PokeContext.Provider value="Pokedex">
      <div className="text-center  fs-5 m-5">
        {/* title */}
        <h1 className="page-title">Pokedex</h1>
      </div>

      {/* Search Bar */}
      <form className="d-flex mb-5" role="search">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="form-control me-2"
          type="search"
          placeholder="Search by name"
          aria-label="Search"
        />
      </form>

      {/* cards */}
      <div className="row g-3 mb-5">
        {pokedex &&
          filteredPokedex.map((pokemon) => (
            <Card pokemon={pokemon} key={pokemon.name}></Card>
          ))}
      </div>
    </PokeContext.Provider>
  );
}
