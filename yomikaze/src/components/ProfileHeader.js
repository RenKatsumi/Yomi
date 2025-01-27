import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import Grid from "@mui/system/Grid";
import CharacterDisplay from "./CharacterDisplay";
import ServerInfo from "./ServerInfo";

const ProfileHeader = ({ nickname, uid, level, server, achievements, characterImage, characterBio }) => {
  return (
    <Card sx={{ maxWidth: 800, margin: "0 auto", marginBottom: 3, padding: 2, position: "relative" }}>
      <Grid container spacing={2} alignItems="center">
        {/* Character Display */}
        <Grid item xs={4}>
          <CharacterDisplay characterImage={characterImage} characterBio={characterBio} />
        </Grid>

        {/* Header */}
        <Grid item xs={8}>
          <CardHeader
            title={nickname}
            subheader={`UID: ${uid}`}
            sx={{
              textAlign: "center",
              backgroundColor: "#1976d2",
              color: "#fff",
              borderRadius: 1,
            }}
          />
          <CardContent>
            <Typography variant="body1" align="center">
              Adventure Rank: {level}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      {/* Server Info */}
      <ServerInfo server={server} achievements={achievements} level={level} />
    </Card>
  );
};


export default ProfileHeader;
