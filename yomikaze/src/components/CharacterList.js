import React from "react";
//import { Grid } from "@mui/material";
import Grid from "@mui/system/Grid";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ avatarInfoList }) => {
  if (!Array.isArray(avatarInfoList) || avatarInfoList.length === 0) {
    console.error("Invalid avatarInfoList:", avatarInfoList);
    return <p>No characters to display.</p>;
  }

  return (
    <Grid container spacing={2}>
      {avatarInfoList.map((character) => (
        <Grid item xs={12} sm={6} md={4} key={character.avatarId}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;
