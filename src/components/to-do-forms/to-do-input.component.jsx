import React from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const InputField = ({ label, name, type, value, onChange, options, isSelect }) => {
  if (isSelect) {
    return (
      <FormControl fullWidth margin="normal">
        <InputLabel>{label}</InputLabel>
        <Select
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          variant="outlined"
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      margin="normal"
      variant="outlined"
    />
  );
};

export default InputField;
