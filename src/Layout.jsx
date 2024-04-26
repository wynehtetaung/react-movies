import { Box } from "@mui/material";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <Box sx={{ background: "#000", minHeight: "100%" }}>
      <Header />
      <Outlet />
    </Box>
  );
}
