import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
