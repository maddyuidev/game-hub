import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        err.message;
        setLoading(false);
      });
  }, []);
  return { genres, error, loading };
};

export default useGenres;