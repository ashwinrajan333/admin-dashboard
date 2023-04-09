import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";

import { useColors } from "../../theme/colors";

import Header from "../../components/Header";
import StatusBox from "../../components/StatusBox";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";

import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import { transactionsData } from "../../data/testdata";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const colors = useColors();

  return (
    <Box sx={{ overflowY: "scroll", maxHeight: "calc(100vh - 100px)" }}>
      {/* header section */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subTitle="everything you need to know" />
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: colors.primary[900],
            },
          }}
        >
          <DownloadIcon sx={{ marginRight: "10px" }} />
          Download Report
        </Button>
      </Box>

      {/* main section  */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="100px"
        gap="10px"
      >
        {/* row 1 */}
        {/* email */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
        >
          <StatusBox
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            increase="+12%"
            progress="0.80"
            title="1,12,000"
            subtitle="Emails Sent"
          />
        </Box>
        {/* sales */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
        >
          <StatusBox
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            increase="+20%"
            progress="0.40"
            title="2,12,000"
            subtitle="Sales"
          />
        </Box>
        {/* New Users */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
        >
          <StatusBox
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            increase="+13.4%"
            progress="0.20"
            title="8,050"
            subtitle="New Users"
          />
        </Box>
        {/* Traffic */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
        >
          <StatusBox
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            increase="+36%"
            progress="0.64"
            title="10,12,000"
            subtitle="Traffic"
          />
        </Box>

        {/* row 2 */}
        {/* revenue generated */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="10px"
            p="0 10px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                ₹59,34,232
              </Typography>
            </Box>
            <IconButton>
              <DownloadIcon
                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>
          <Box height="180px" m="-20px 0 0 0">
            <LineChart inDashboard={true} />
          </Box>
        </Box>
        {/* transactions */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="10px"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {transactionsData.map((transaction, index) => {
            return (
              <Box
                key={index}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="10px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  ₹{transaction.cost}
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* row 3 */}
        {/* Campaign */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="10px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="10px"
          >
            <ProgressCircle size="100" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "10px" }}
            >
              ₹48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        {/* Sales Quantity */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "10px 10px 0 10px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="200px" mt="-20px">
            <BarChart inDashboard={true} />
          </Box>
        </Box>
        {/* Geography  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="10px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "10px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="150px">
            <GeographyChart inDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
