import { TextField, InputAdornment, IconButton } from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InputsField = ({ item, onChange, formData }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      key={item.id}
      id={item.id}
      size="medium"
      label={item.label}
      type={item.type === "password" && showPassword ? "text" : item.type}
      placeholder={item.placeholder}
      fullWidth
      onChange={onChange}
      value={formData[item.id]}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{item.icon}</InputAdornment>
        ),
        endAdornment:
          item.type === "password" && formData[item.id] ? (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <VisibilityOffIcon sx={{ color: "#637381" }} />
                ) : (
                  <VisibilityIcon sx={{ color: "#637381" }} />
                )}
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
    />
  );
};

export default InputsField;
