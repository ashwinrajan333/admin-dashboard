import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box>
      <Header title="Line Chart" subTitle="Sample Nivo Line Chart" />
      <Box height="70vh" width="77vw">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
