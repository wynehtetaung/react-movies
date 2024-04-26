import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      const data = await res.json();
      setMovie(data);
      console.log(data);
    })();
  }, []);
  return (
    <Container maxWidth="lg">
      <Box sx={{ height: 750 }}>
        <Box sx={{ p: 2, position: "relative" }}>
          <img
            width={"100%"}
            height={500}
            src={`https://image.tmdb.org/t/p/original${
              movie && movie.backdrop_path
            }`}
          />
          <Box sx={{ position: "absolute", bottom: -130, left: 50 }}>
            <img
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
              width={280}
              height={400}
              style={{ borderRadius: 5 }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              left: 330,
              color: "#fff",
              background: "rgba(0, 0, 0, 0.6)",
              borderRadius: 2,
              p: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                fontWeight: 500,
              }}
            >
              {movie ? movie.title : "movie title"}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 300,
              }}
            >
              {movie ? movie.tagline : "movie tagline"}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                {movie
                  ? Number.parseFloat(movie.vote_average).toFixed(1)
                  : "vote average"}
                <StarIcon sx={{ width: 18, height: 16 }} />
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 300,
                }}
              >
                {movie ? `(${movie.vote_count}) ` : "(0) "}votes
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 300,
              }}
            >
              {movie ? movie.runtime : ""} mins
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 300,
              }}
            >
              release date: {movie ? movie.release_date : ""}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
              {movie
                ? movie.genres.map((genre) => (
                    <Typography
                      key={genre.id}
                      sx={{
                        p: 0.8,
                        border: 1,
                        borderRadius: 5,
                        borderColor: "#fff",
                        fontSize: 14,
                        fontWeight: 300,
                      }}
                    >
                      {genre.name}
                    </Typography>
                  ))
                : ""}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: -80,
            left: "36%",
            color: "#fff",
          }}
        >
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: 400,
            }}
          >
            Synopsis
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 300,
              mt: 2,
              textWrap: "wrap",
              width: "80%",
            }}
          >
            {movie ? movie.overview : ""}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", color: "#fff" }}
      >
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: 400,
          }}
        >
          Useful Links
        </Typography>
        <Link
          style={{ textDecoration: "none", color: "#333" }}
          to={movie ? movie.homepage : ""}
          target="_blank"
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 400,
              background: "red",
              borderRadius: 5,
              paddingX: 5,
              py: 0.5,
            }}
          >
            HomePage
          </Typography>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#333" }}
          to={movie ? `https://www.imdb.com/title/${movie.imdb_id}` : ""}
          target="_blank"
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 400,
              background: "#ff0f",
              borderRadius: 5,
              paddingX: 5,
              py: 0.5,
            }}
          >
            IMDB
          </Typography>
        </Link>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: 25,
            fontWeight: 500,
            textAlign: "center",
            color: "#fff",
            mt: 12,
          }}
        >
          Production Companies
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: 8,
            pb: 6,
            flexWrap: "wrap",
          }}
        >
          {movie
            ? movie.production_companies.map((company) => {
                return (
                  <Box key={company.id}>
                    <img
                      width={200}
                      height={200}
                      src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                    />
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: 400,
                        color: "#fff",
                      }}
                    >
                      {company.name}
                    </Typography>
                  </Box>
                );
              })
            : ""}
        </Box>
      </Box>
    </Container>
  );
}
