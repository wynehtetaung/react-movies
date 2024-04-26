import { Container, Typography } from "@mui/material";
import Card from "./Card";

export default function MovieList({ movies, isLoading, title }) {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ color: "#fff", fontWeight: 500, my: 6, ml: 10 }}
      >
        {title}
      </Typography>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          gap: 1.5,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          pb: 4,
        }}
      >
        <Card movies={movies} isLoading={isLoading} />
      </Container>
    </>
  );
}
