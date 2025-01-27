import React from "react";
import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/system/Grid";
import PropTypes from "prop-types";

// Placeholder background URL and avatar image
const genshinBackground = "path-to-your-genshin-background-image.png";

const PlayerCard = ({ playerInfo, uid }) => {
  if (!playerInfo) return null;

  const { nickname, level, avatarImage } = playerInfo;

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${genshinBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 3,
        borderRadius: 3,
        color: "white",
        boxShadow: 3,
      }}
    >
      {/* Player Avatar */}
      <Box
        component="img"
        src={avatarImage || "fallback-avatar.png"} // Use fallback if no avatarImage
        alt={`${nickname}'s avatar`}
        sx={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: "3px solid white",
          marginRight: 3,
        }}
      />
      {/* Player Info */}
      <Grid container direction="column">
        <Typography variant="h4">{nickname}</Typography>
        <Typography variant="body1">UID: {uid}</Typography>
        <Typography variant="body1">Adventure Rank: {level}</Typography>
      </Grid>
    </Card>
  );
};

PlayerCard.propTypes = {
  playerInfo: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    avatarImage: PropTypes.string,
  }).isRequired,
  uid: PropTypes.string.isRequired,
};

export default PlayerCard;
