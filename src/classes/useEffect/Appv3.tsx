import { useEffect, useState } from "react";
import { Pokemon } from "../useEffect/Pokemon";

const ENDPOINT = "https://test-api-codeable.up.railway.app/api/pokemons";

type Pokemon = {
  id: string;
  name: string;
  image_url: string;
  types: string[];
};

export const Appv3 = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("loading");

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await fetch(ENDPOINT);
        const { data } = await response.json();
        setPokemons(data);
        setStatus("success");
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    }

    getPokemons();
  }, []);

  return (
    <div>
      {status === "loading" && <p>Loading.....</p>}
      {status === "error" && <p>Se produjo un error al cargar la data</p>}
      {status === "success" &&
        pokemons.map((pokemon) => {
          return (
            <Pokemon
              key={pokemon.id}
              imageUrl={pokemon.image_url}
              name={pokemon.name}
              types={pokemon.types}
            />
          );
        })}
    </div>
  );
};
