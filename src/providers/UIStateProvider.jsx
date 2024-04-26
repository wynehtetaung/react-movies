import { createContext, useContext, useState, useEffect } from "react";

const uiContext = createContext();

export function useUiContext() {
  return useContext(uiContext);
}

export default function UIStateProvider({ children }) {
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [upComingMovie, setUpComingMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      const data = await res.json();
      setPopularMovie(data.results);
      if (res.ok) {
        setTimeout(() => {
          setIsLoading(true);
        }, 4000);
      }
    })();
    (async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      const data = await res.json();
      setTopRatedMovie(data.results);
      if (res.ok) {
        setTimeout(() => {
          setIsLoading(true);
        }, 4000);
      }
    })();
    (async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      const data = await res.json();
      setUpComingMovie(data.results);
      if (res.ok) {
        setTimeout(() => {
          setIsLoading(true);
        }, 4000);
      }
    })();
  }, []);

  return (
    <uiContext.Provider
      value={{
        popularMovie,
        topRatedMovie,
        upComingMovie,
        isLoading,
      }}
    >
      {children}
    </uiContext.Provider>
  );
}
