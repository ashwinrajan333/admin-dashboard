import React from "react";
import { Box, Typography } from "@mui/material";

import { useColors } from "../theme/colors";

import ProgressCircle from "./ProgressCircle";

const StatusBox = ({ title, subtitle, increase, icon, progress }) => {
  const colors = useColors();

  return (
    <Box width="100%" margin="0 20px">
      {/* row 1 */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          {icon}
          <Typography variant="h4" fontWeight="bold" color={colors.grey[100]}>
            {title}
          </Typography>
        </Box>
        <ProgressCircle progress={progress} />
      </Box>
      {/* row 2 */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" color={colors.greenAccent[500]}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          color={colors.greenAccent[600]}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatusBox;
