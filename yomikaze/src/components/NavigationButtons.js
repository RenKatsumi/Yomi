// src/components/NavigationButtons.js
import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function NavigationButtons() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button
        component={Link}
        to="/profiles"
        sx={{
          color: "#fff",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#555",
            borderRadius: "4px",
          },
        }}
      >
        Profiles
      </Button>
      <Button
        component={Link}
        to="/leaderboard"
        sx={{
          color: "#fff",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#555",
            borderRadius: "4px",
          },
        }}
      >
        Leaderboard
      </Button>
    </Box>
  );
}

export default NavigationButtons;