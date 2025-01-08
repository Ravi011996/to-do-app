import React from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

const SignInForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Login submitted");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      {/* Login Box */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 3,
          p: 4,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        {/* Login Header */}
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 2, width: "100%" }}
        >
          {/* Username Field */}
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Password Field */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Login Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInForm;
