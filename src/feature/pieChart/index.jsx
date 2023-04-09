import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Sample Nivo Pie Chart" />
      <Box height="70vh" width="77vw">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
