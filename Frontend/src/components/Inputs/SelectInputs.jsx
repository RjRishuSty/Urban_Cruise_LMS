import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputAdornment,
  OutlinedInput,
  useMediaQuery,
} from "@mui/material";
import React, { useCallback, useMemo } from "react";

const SelectInputs = ({
  data,
  value,
  size = "small",
  setFormData = () => {},
  onChange, 
  isObjectUpdater = false, 
  isFilter = false, 
}) => {
  const options = useMemo(() => data.options || [], [data.options]);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleChange = useCallback(
    (e) => {
      const selectedValue = e.target.value;

      console.log(`Selected value for ${data.id}:`, selectedValue);

      // Update formData / filters
      if (setFormData) {
        if (isObjectUpdater) {
          // Form: update state object
          setFormData((prev) => ({ ...prev, [data.id]: selectedValue }));
        } else {
          // Filter: pass value directly
          setFormData(selectedValue);
        }
      }

      // Optional callback for extra handling
      if (onChange) onChange(selectedValue);
    },
    [data.id, setFormData, onChange, isObjectUpdater]
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

  const formControlStyles = useMemo( () => ({
    width: isMobile && isFilter ? 70 : data.width || "100%",
  }),
  [isMobile, isFilter, data.width]);
  const selectStyles = { bgcolor: "#fff", color: "text.primary" };

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
          <MenuItem
            key={item.value}
            value={item.value}
            sx={{ textTransform: "capitalize" }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default React.memo(SelectInputs);
