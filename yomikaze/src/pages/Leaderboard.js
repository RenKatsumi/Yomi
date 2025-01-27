// src/pages/Leaderboard.jsx/*
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const Leaderboard = () => {
  const rows = [
    { name: "Raiden Shogun", constellation: "C3", critValue: "270.5 CV", weapon: "Engulfing Lightning" },
    { name: "Keqing", constellation: "C2", critValue: "261.5 CV", weapon: "Primordial Jade Cutter" },
    { name: "Dehya", constellation: "C0", critValue: "255.0 CV", weapon: "Beacon of the Reed Sea" },
  ];

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "20px auto", boxShadow: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Constellation</TableCell>
            <TableCell>Crit Value</TableCell>
            <TableCell>Weapon</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.constellation}</TableCell>
              <TableCell>{row.critValue}</TableCell>
              <TableCell>{row.weapon}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Leaderboard;
