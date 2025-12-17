import { Box, Stack, Typography, Button, useMediaQuery } from "@mui/material";
import React, { useMemo } from "react";
import { flexBetween, flexStart } from "../../constants/flexUtils";
import { filterData } from "../../constants/filterByData";
import SelectInputs from "../Inputs/SelectInputs";
import CreateLeads from "../CreateLeads";
import ExportButton from "../ExportButton";
import ReusableSpeedDial from "../ReusableSpeedDial";

const TableIntro = ({ title, filters, setFilters, filteredLeads }) => {
  const miniLaptopDashboard = useMediaQuery("(max-width:1384px)");
  const isMobile = useMediaQuery("(max-width:660px)");
  const isFilterActive = useMemo(
    () =>
      Object.values(filters).some(
        (value) => value !== "" && value !== null && value !== undefined
      ),
    [filters]
  );

  const filterSelects = useMemo(
    () =>
      filterData.map((item) => (
        <SelectInputs
          key={item.id}
          data={item}
          value={filters[item.id] || ""}
          setFormData={(val) =>
            setFilters((prev) => ({
              ...prev,
              [item.id]: val,
            }))
          }
          isObjectUpdater={false}
          isFilter   
        />
      )),
    [filters, setFilters]
  );

  const handleClearFilters = () => {
    const clearedFilters = {};
    Object.keys(filters).forEach((key) => {
      clearedFilters[key] = "";
    });
    setFilters(clearedFilters);
  };

  const titleStyles = useMemo(
    () => ({ fontWeight: 600, letterSpacing: 1, textTransform: "capitalize" }),
    []
  );
  const filterBoxStyles = useMemo(
    () => ({ ...flexStart, gap: 2, alignItems: "center" }),
    []
  );
  const filterLabelStyles = useMemo(() => ({ letterSpacing: 1 }), []);

  return (
    <Stack direction="row" sx={{ ...flexBetween, mb: 2 }}>
    
      <Typography variant={isMobile?"caption":"body1"} sx={titleStyles}>
        {title}
      </Typography>
      <Box sx={filterBoxStyles}>
       {!isMobile&&<Typography variant="body2" sx={filterLabelStyles}>
          Filter By
        </Typography>}
        {filterSelects}
        {isFilterActive && (
          <Button size="small" variant="outlined" onClick={handleClearFilters}>
            Clear Filters
          </Button>
        )}
      </Box>
      {miniLaptopDashboard ? (
  <ReusableSpeedDial
    CreateComponent={<CreateLeads pageType="create" />}
    ExportComponent={
      <ExportButton leads={filteredLeads} filters={filters} />
    }
  />
) : (
  <>
    <ExportButton leads={filteredLeads} filters={filters} />
    <CreateLeads pageType="create" />
  </>
)}

    </Stack>
  );
};

export default React.memo(TableIntro);
