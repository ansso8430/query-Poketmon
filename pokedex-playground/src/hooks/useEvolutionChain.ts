import axios, { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { EvolutionChainResponse } from "../types";

export const useEvolutionChain = (
  url?: string
): UseQueryResult<AxiosResponse<EvolutionChainResponse>> => {
  return useQuery(["evolution", { url }], () => (url ? axios.get(url) : null));
};
