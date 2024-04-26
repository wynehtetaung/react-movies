import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useUiContext } from "../providers/UIStateProvider";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Star as StarIcon } from "@mui/icons-material";
import Loading from "./Loading";

export default function Carousels({ isLoading }) {
  const { popularMovie } = useUiContext();
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showStatus={false}
    >
      {popularMovie.map((movie) =>
        isLoading ? (
          <Box key={movie.id} sx={{ maxHeight: 550 }}>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              to={`/movie/${movie.id}`}
            >
              <Box
                sx={{
                  backgroundBlendMode: "darken",
                }}
              >
                <img
                  style={{ position: "relative", opacity: 0.7 }}
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
                <Box
                  sx={{
                    position: "absolute",
                    zIndex: 1,
                    bottom: 90,
                    left: 70,
                    color: "#fff",
                    width: "50%",
                  }}
                >
                  <Typography
                    sx={{ textAlign: "start", fontWeight: 600 }}
                    variant="h3"
                  >
                    {movie.title}
                  </Typography>
                  <Typography sx={{ textAlign: "start", mt: 1, fontSize: 20 }}>
                    {movie.release_date}{" "}
                    <span
                      style={{
                        marginLeft: 20,
                      }}
                    >
                      {movie.vote_average}
                      <StarIcon sx={{ ms: 0, pt: 0.7, color: "yellow" }} />
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "start",
                      fontWeight: 400,
                      fontStyle: "italic",
                      mt: 1,
                      fontSize: 18,
                      lineHeight: 1.1,
                    }}
                  >
                    {movie.overview}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Box>
        ) : (
          <Box key={movie.id} sx={{ height: 550 }}>
            <Loading />
          </Box>
        )
      )}
    </Carousel>
  );
}
