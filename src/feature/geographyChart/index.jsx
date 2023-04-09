import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <Box>
      <Header title="Geography Chart" subTitle="Sample Nivo Geography Chart" />
      <Box height="70vh" width="77vw">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
