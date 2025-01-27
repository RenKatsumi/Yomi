import { Box, Avatar, Typography } from "@mui/material";

const CharacterDisplay = ({ characterImage, characterBio }) => (
  <Box textAlign="center">
    <Avatar
      src={characterImage}
      alt="Character Image"
      sx={{ width: 100, height: 100, margin: "0 auto" }}
    />
    <Typography variant="body2" mt={2}>
      {characterBio}
    </Typography>
  </Box>
);

export default CharacterDisplay;
