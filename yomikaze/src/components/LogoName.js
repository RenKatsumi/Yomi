// src/components/LogoName.js
import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import logoname from "../assets/logoname.png";

function LogoName() {
  return (
    <Box>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src={logoname}
          alt="Logoname"
          style={{ height: "40px", cursor: "pointer" }}
        />
      </Link>
    </Box>
  );
}

export default LogoName;