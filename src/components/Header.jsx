import React from "react";
import { Box, Typography } from "@mui/material";

import { useColors } from "../theme/colors";

const Header = ({ title, subTitle }) => {
  const colors = useColors();
  return (
    <Box mb="20px">
      <Typography variant="h2" color={colors.grey[100]} fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
