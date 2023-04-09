import React from "react";
import { Box } from "@mui/material";

import { useColors } from "../theme/colors";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const colors = useColors();

  return (
    <Box
      sx={{
        background: `radial-gradient(${
          colors.primary[400]
        } 50%, transparent 50%),
        conic-gradient(transparent 0deg ${progress * 360}deg, ${
          colors.blueAccent[500]
        } ${progress * 360}deg 360deg), ${colors.greenAccent[500]}`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
      }}
    ></Box>
  );
};

export default ProgressCircle;
