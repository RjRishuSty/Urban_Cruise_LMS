import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { useCallback, useMemo } from "react";

const SelectInputs = ({ data, value, size = "small", setFormData = () => {} }) => {
  const options = useMemo(() => data.options || [], [data.options]);

  const handleChange = useCallback(
    (e) => {
      setFormData((prev) => ({ ...prev, [data.id]: e.target.value }));
    },
    [data.id, setFormData]
  );

  const InputComponent = useMemo(() => {
    if (!data.icon) return undefined;
    return (
      <OutlinedInput
        startAdornment={<InputAdornment position="start">{data.icon}</InputAdornment>}
        label={data.label}
      />
    );
  }, [data.icon, data.label]);

  const formControlStyles = useMemo(() => ({ width: data.width || "100%" }), [data.width]);

  const selectStyles = { bgcolor: "#fff", color: "text.primary" }

  return (
    <FormControl size={size} sx={formControlStyles} disabled={data.disabled}>
      <InputLabel id={`${data.id}-label`}>{data.label}</InputLabel>
      <Select
        labelId={`${data.id}-label`}
        id={data.id}
        value={value || ""}
        onChange={handleChange}
        input={InputComponent}
        label={data.label}
        displayEmpty
        sx={selectStyles}
      >
        {data.placeholder && (
          <MenuItem disabled value="">
            <em>{data.placeholder}</em>
          </MenuItem>
        )}
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value} sx={{ textTransform: "capitalize" }}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default React.memo(SelectInputs);
