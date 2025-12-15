import React, { useMemo } from "react";
import { TextField } from "@mui/material";

const TextAreaInputs = ({ item, formData, onChange }) => {
  const value = useMemo(() => formData[item.id] || "", [formData, item.id]);
  const placeholder = useMemo(() => item.placeholder || "", [item.placeholder]);
  const textFieldStyles = useMemo(() => ({ bgcolor: "#fff" }), []);

  return (
    <TextField
      fullWidth
      id={item.id}
      label={item.label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      multiline
      rows={4}
      sx={textFieldStyles}
    />
  );
};

export default React.memo(TextAreaInputs);
