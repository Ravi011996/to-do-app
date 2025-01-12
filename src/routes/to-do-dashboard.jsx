import React, { useState } from "react";
import { Container, Paper, Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation
import { DatePicker } from "@mui/x-date-pickers/DatePicker"; // Import DatePicker
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"; // Adapter for DatePicker
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"; // Provider for DatePicker
import TaskTable from "../components/to-do-table/to-do-table.component";
import TaskChart from "../components/to-do-pi-chart/to-do-pi-chart.component";

const Home = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <Container sx={{ mt: 4 }}>
      {/* New Paper for Top Section - 100% Width */}
      <Paper sx={{ p: 3, width: "100%", mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Start Date Picker */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} />}
              />
            </LocalizationProvider>

            {/* End Date Picker */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>

          {/* Right Side Add Task Button */}
          <Link to="/add" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Add Task
            </Button>
          </Link>
        </Box>
      </Paper>

      {/* Content Wrapper */}
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "nowrap", // Prevent wrapping
          alignItems: "flex-start",
        }}
      >
        {/* Table Section - 75% Width */}
        <Paper
          sx={{
            p: 3,
            flex: "3 1 75%",
            minWidth: "0", // Prevent overflow issues
          }}
        >
          <TaskTable />
        </Paper>

        {/* Chart Section - 25% Width */}
        <Paper
          sx={{
            p: 1,
            flex: "1 1 25%",
            minWidth: "0", // Prevent overflow issues
          }}
        >
          <TaskChart />
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
