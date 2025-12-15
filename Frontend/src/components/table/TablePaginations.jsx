import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Box,
  IconButton,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { flexBetween, flexCenter } from "../../constants/flexUtils";

const TablePaginations = ({
  totalCount,
  pageSizeOptions = [5, 10, 15, 20],
  onPageChange,
  onPageSizeChange,
}) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);
  const totalPages = useMemo(
    () => Math.ceil(totalCount / pageSize),
    [totalCount, pageSize]
  );

  useEffect(() => {
    onPageChange(page, pageSize);
  }, [page, pageSize, onPageChange]);

  const handlePrev = useCallback(() => {
    setPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleNext = useCallback(() => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  const handlePageSizeChange = useCallback(
    (value) => {
      const size = parseInt(value);
      if (!isNaN(size) && size > 0) {
        setPageSize(size);
        setPage(1);
        onPageSizeChange(size);
      }
    },
    [onPageSizeChange]
  );

  const textFieldStyles = useMemo(() => ({ width: 70 }), []);

  return (
    <Box sx={{ mt: 2, ...flexBetween }}>
      <Box sx={{ ...flexCenter, gap: 1 }}>
        <IconButton onClick={handlePrev} disabled={page === 1}>
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>
        <Typography>
          Page {page} of {totalPages}
        </Typography>
        <IconButton onClick={handleNext} disabled={page === totalPages}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>

      <Box sx={{ ...flexCenter, gap: 1 }}>
        <Typography>Rows:</Typography>
        <Select
          size="small"
          value={pageSize}
          onChange={(e) => handlePageSizeChange(e.target.value)}
        >
          {pageSizeOptions.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <TextField
          size="small"
          type="number"
          placeholder="Custom"
          onBlur={(e) => handlePageSizeChange(e.target.value)}
          sx={textFieldStyles}
        />
      </Box>
    </Box>
  );
};

export default React.memo(TablePaginations);
