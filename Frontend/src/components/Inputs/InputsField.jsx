import { TextField, InputAdornment, IconButton } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { shallowEqual, useSelector } from "react-redux";

const InputsField = ({ formData, onChange, item }) => {
  const [showPassword, setShowPassword] = useState(false);
  const auth = useSelector((state) => state.auth.user, shallowEqual);

  const value = formData[item.id];
  const inputType = useMemo(
    () =>
      item.type === "password" && showPassword ? "text" : item.type || "text",
    [item.type, showPassword]
  );
  const isOwnerId = useMemo(() => item.id === "ownerId", [item.id]);

  const handleTogglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const inputProps = useMemo(() => {
    return {
      startAdornment: item.icon ? (
        <InputAdornment position="start">{item.icon}</InputAdornment>
      ) : null,
      endAdornment:
        item.type === "password" && value ? (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePassword}>
              {showPassword ? (
                <VisibilityOffIcon sx={{ color: "#637381" }} />
              ) : (
                <VisibilityIcon sx={{ color: "#637381" }} />
              )}
            </IconButton>
          </InputAdornment>
        ) : null,
    };
  }, [item.icon, item.type, value, handleTogglePassword, showPassword]);

  return (
    <TextField
      id={item.id || ""}
      size="medium"
      label={item.label || ""}
      type={inputType}
      placeholder={item.placeholder || ""}
      fullWidth
      onChange={onChange}
      value={isOwnerId ? `${auth.firstName} ${auth.lastName}` : value || ""}
      sx={{ backgroundColor: "#fff" }}
      InputProps={inputProps}
    />
  );
};

export default React.memo(InputsField);
