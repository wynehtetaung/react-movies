import { AppBar, Toolbar, Box, IconButton, Typography } from "@mui/material";
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";
import logo from "../assets/react_movie_logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const style = {
  menu: {
    display: "flex",
    justifyContent: "space-between",
  },
  fontSize: {
    fontSize: 18,
    color: "#fff",
  },
};

function mouseOver(event) {
  event.target.style.color = "red";
}
function mouseOut(event) {
  event.target.style.color = "#FFF";
}

export default function Header() {
  const [mode, setMode] = useState(false);
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ background: "#333132" }}>
      <Toolbar style={style.menu}>
        <Box>
          <IconButton
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={logo}
              width={50}
              style={{ borderRadius: 3 }}
              title="React Movie"
            />
          </IconButton>
          <IconButton
            disableRipple
            onClick={() => {
              navigate("/movies/popular");
            }}
          >
            <Typography
              style={style.fontSize}
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            >
              Popular
            </Typography>
          </IconButton>
          <IconButton
            disableRipple
            onClick={() => {
              navigate("/movies/top_rated");
            }}
          >
            <Typography
              style={style.fontSize}
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            >
              Top rated
            </Typography>
          </IconButton>
          <IconButton
            disableRipple
            onClick={() => {
              navigate("/movies/upcoming");
            }}
          >
            <Typography
              style={style.fontSize}
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            >
              Upcoming
            </Typography>
          </IconButton>
        </Box>
        <Box>
          {mode ? (
            <IconButton
              onClick={() => {
                setMode(!mode);
              }}
              sx={{ color: "#fff" }}
            >
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setMode(!mode);
              }}
              sx={{ color: "#fff" }}
            >
              <DarkModeIcon />
            </IconButton>
          )}
          {/* <IconButton sx={{ color: "#fff" }}>
            <ProfileIcon />
          </IconButton> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
