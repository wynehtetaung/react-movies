import { Box, Typography } from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function Card({ movies, isLoading }) {
  return movies.map((movie) =>
    isLoading ? (
      <Link
        key={movie.id}
        style={{
          textDecoration: "none",
          color: "#fff",
        }}
        to={`/movie/${movie.id}`}
      >
        <Box sx={{ position: "relative" }}>
          <img
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.poster_path : ""
            }`}
            width={140}
            height={200}
            style={{ borderRadius: 5 }}
          />
          <Box
            sx={{
              width: 140,
              p: 1,
              position: "absolute",
              bottom: 5,
              background: "#31363F99",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: 14,
                textWrap: "wrap",
                fontWeight: 500,
              }}
            >
              {movie.title}
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                fontSize: 10,
                textWrap: "wrap",
                width: 135,
                fontWeight: 300,
                mt: 0.2,
              }}
            >
              {movie.release_date}
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 0.2 }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: 10,
                  textWrap: "wrap",
                  width: 135,
                  fontWeight: 300,
                }}
              >
                {movie.vote_average}
              </Typography>
              <StarIcon sx={{ width: 18, height: 18, color: "yellow" }} />
            </Box>
          </Box>
        </Box>
      </Link>
    ) : (
      <Box
        key={movie.id}
        sx={{
          width: 140,
          height: 200,
          bottom: 5,
          background: "#31363F99",
          borderRadius: 1,
        }}
      >
        <Loading />
      </Box>
    )
  );
}
