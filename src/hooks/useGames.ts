import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface Game {
  id: number;
  name: string;
}
interface FetchResponse {
  count: number;
  results: Game[];
}
const UseGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => err.message);
  }, []);
  return { games, error };
};

export default UseGames;
