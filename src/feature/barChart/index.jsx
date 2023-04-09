import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box>
      <Header title="Bar Chart" subTitle="Sample Nivo Bar Chart" />
      <Box height="70vh" width="77vw">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
