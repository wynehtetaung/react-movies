import { Box } from "@mui/material";
import Carousels from "../components/Carousel";
import MovieList from "../components/MovieList";
import { useUiContext } from "../providers/UIStateProvider";

export default function Home() {
  const { popularMovie, topRatedMovie, upComingMovie, isLoading } =
    useUiContext();
  const title = "POPULAR";
  return (
    <Box>
      <Carousels isLoading={isLoading} />
      <MovieList movies={popularMovie} isLoading={isLoading} title={title} />
    </Box>
  );
}
