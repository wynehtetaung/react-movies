import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Carousels from "../components/Carousel";
import MovieList from "../components/MovieList";
import { useUiContext } from "../providers/UIStateProvider";

export default function List() {
  const { type } = useParams();
  const { popularMovie, topRatedMovie, upComingMovie, isLoading } =
    useUiContext();
  return (
    <Box>
      <Carousels isLoading={isLoading} />
      <MovieList
        movies={
          type == "popular"
            ? popularMovie
            : type == "upcoming"
            ? upComingMovie
            : topRatedMovie
        }
        isLoading={isLoading}
        title={type.toUpperCase()}
      />
    </Box>
  );
}
