import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Logo from "./Logo";
import LogoName from "./LogoName";
import NavigationButtons from "./NavigationButtons";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Section: Logo, LogoName, and Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Logo />
          <LogoName />
          <NavigationButtons />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
