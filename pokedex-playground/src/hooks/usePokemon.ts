import axios, { AxiosResponse } from "axios";
import { useQueries, useQuery, UseQueryResult } from "react-query";
import { PokemonResponse } from "../types";

const pokemonApi = (id?: string) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id || ""}`, {
    params: { limit: 151 },
  });
};

// usePokemon store
export const usePokemon = <T>(
  id?: string
): UseQueryResult<AxiosResponse<T>, Error> => {
  return useQuery(id ? ["pokemon", id] : "pokemon", () => pokemonApi(id));
};

// evolution store
export const usePokemonQueries = (
  names: string[]
): Array<UseQueryResult<AxiosResponse<PokemonResponse>>> => {
  const queries = names.map((name, idx) => ({
    queryKey: ["evolution", `${name}_${idx}`],
    queryFn: () => pokemonApi(name),
  }));

  return useQueries(queries) as Array<
    UseQueryResult<AxiosResponse<PokemonResponse>, Error>
  >;
};
