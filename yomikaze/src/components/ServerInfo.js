import { Box, Typography } from "@mui/material";

const ServerInfo = ({ server, achievements, level }) => (
  <Box
    sx={{
      textAlign: "right",
      position: "absolute",
      top: 16,
      right: 16,
    }}
  >
    <Typography variant="body2">Server: {server}</Typography>
    <Typography variant="body2">Achievements: {achievements}</Typography>
    <Typography variant="body2">Adventure Rank: {level}</Typography>
  </Box>
);

export default ServerInfo;