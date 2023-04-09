import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { useTheme, ThemeContext } from "./theme/useTheme";

import TopBar from "./feature/global/TopBar";
import SideBar from "./feature/global/SideBar";
import Dashboard from "./feature/dashboard";
import Team from "./feature/team";
import Contact from "./feature/contact";
import Invoice from "./feature/invoice";
import Profile from "./feature/profile";
import Calendar from "./feature/calendar";
import FAQ from "./feature/faq";
import BarChart from "./feature/barChart";
import PieChart from "./feature/pieChart";
import LineChart from "./feature/lineChart";
import GeographyChart from "./feature/geographyChart";

function App() {
  const [theme, toggleMode] = useTheme();
  return (
    <ThemeContext.Provider value={toggleMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <div className="content">
            <TopBar />
            <Box marginLeft={2} marginRight={2}>
              <Routes>
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/invoices" element={<Invoice />} />
                <Route path="/form" element={<Profile />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bar" element={<BarChart />} />
                <Route path="/pie" element={<PieChart />} />
                <Route path="/line" element={<LineChart />} />
                <Route path="/geography" element={<GeographyChart />} />
                <Route path="*" element={<Dashboard />} />
              </Routes>
            </Box>
          </div>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
