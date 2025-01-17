import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Card({ pokemon }) {
  const [pokemonData, setPokemonData] = useState(null);
  pokemon.name = capitalizeFirstLetter(pokemon.name);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, []);

  if (pokemonData)
    return (
      <div className="col-md-4 mt-3 col-6 col-lg-3">
        <div className="card d-flex align-items-center">
          <img
            src={pokemonData.sprites.other["official-artwork"].front_default}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body w-100 textalign-center">
            <h5 className="card-title">
              {pokemon.name} #{pokemonData.id}
            </h5>
            {pokemonData.stats.map((stat) => (
              <div
                key={stat.stat.name}
                className="d-flex gap-3 align-items-center"
              >
                {stat.stat.name == "hp" && <span>HP </span>}
                {stat.stat.name == "attack" && <span>ATK</span>}
                {stat.stat.name == "defense" && <span>DEF</span>}
                {stat.stat.name == "special-attack" && <span>ATK SP</span>}
                {stat.stat.name == "special-defense" && <span>DEF SP</span>}
                {stat.stat.name == "speed" && <span>SPEED</span>}

                {/* progress bar */}
                <div
                  className="col progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className={`progress-bar 
                        ${
                          (stat.stat.name == "hp" && "bg-success") ||
                          (stat.stat.name == "attack" && "bg-danger") ||
                          (stat.stat.name == "defense" && "bg-primary") ||
                          (stat.stat.name == "special-attack" &&
                            "bg-warning") ||
                          (stat.stat.name == "special-defense" && "bg-info") ||
                          (stat.stat.name == "speed" && "bg-dark")
                        }
                      
                    }`}
                    style={{ width: `${(stat.base_stat * 100) / 255}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
