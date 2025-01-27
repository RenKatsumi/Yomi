// src/components/Logo.js
import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <Box>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: "40px", cursor: "pointer" }}
        />
      </Link>
    </Box>
  );
}

export default Logo;