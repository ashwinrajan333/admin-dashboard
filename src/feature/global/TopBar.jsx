import React, { useContext } from "react";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";

import { ThemeContext } from "../../theme/useTheme";

import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { useColors } from "../../theme/colors";

const TopBar = () => {
  const theme = useTheme();
  const { toggleTheme } = useContext(ThemeContext);
  const colors = useColors();

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
      }}
    >
      {/* search */}
      <Box
        sx={{
          display: "flex",
          backgroundColor: colors.primary[400],
          p: 1,
          borderRadius: "7px",
        }}
      >
        <InputBase type="text" placeholder="Search" />
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </Box>

      {/* icons & settings */}
      <Box sx={{ display: "flex" }}>
        <IconButton onClick={toggleTheme}>
          {theme.palette.mode === "dark" ? <WbSunnyIcon /> : <DarkModeIcon />}
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
