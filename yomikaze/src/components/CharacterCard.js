import React from "react";
import { Card, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

const CharacterCard = ({ character }) => {
  if (!character) {
    console.error("Character data is undefined:", character);
    return null;
  }

  const { name, level, element, avatarId } = character;

  return (
    <Card sx={{ padding: 2, marginBottom: 2 }}>
      <Box>
        <Typography variant="h6">{name || "Unknown Character"}</Typography>
        <Typography variant="body2">Level: {level || "N/A"}</Typography>
        <Typography variant="body2">Element: {element || "N/A"}</Typography>
        <Typography variant="body2">Avatar ID: {avatarId || "N/A"}</Typography>
      </Box>
    </Card>
  );
};

// PropTypes for validation
CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.number,
    element: PropTypes.string,
    avatarId: PropTypes.number,
  }),
};

export default CharacterCard;
