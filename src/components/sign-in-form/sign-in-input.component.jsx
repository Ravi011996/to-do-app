import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const InputField = ({ label, name, type, value, onChange, error, startIcon }) => {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error}
      variant="outlined"
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ),
      }}
    />
  );
};

export default InputField;
