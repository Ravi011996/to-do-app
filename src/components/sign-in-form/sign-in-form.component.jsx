import React, { useState, useContext } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import InputField from "./sign-in-input.component";
import './sign-in-form.styles.css';

const SignInForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let valid = true;
    let newErrors = { username: "", password: "" };

    if (!formData.username) {
      newErrors.username = "Username is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
      newErrors.username = "Please enter a valid email address.";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      try {
        const { username, password } = formData;
        const { user } = await signInAuthUserWithEmailAndPassword(
          username,
          password
        );
        setCurrentUser(user);
        navigate("/dashboard");
      } catch (error) {
        alert("User sign-in failed");
        console.error("User sign-in failed", error);
      }
    }
  };

  return (
    <Container className="container" maxWidth="sm">
      <Box className="box">
        <Typography className="typography" variant="h4" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="form"
        >
          <InputField
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
            startIcon={<AccountCircleIcon />}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            startIcon={<LockIcon />}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="button"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInForm;
