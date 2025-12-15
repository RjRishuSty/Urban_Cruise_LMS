import { Box, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { flexBetween, flexStart } from "../../constants/flexUtils";
import { filterData } from "../../constants/filterByData";
import SelectInputs from "../Inputs/SelectInputs";
import { shallowEqual, useSelector } from "react-redux";
import CreateLeads from "../CreateLeads";

const TableIntro = ({ title, filters, setFilters }) => {
  const leads = useSelector((state) => state.lead.leads, shallowEqual);

  const filterSelects = useMemo(
    () =>
      filterData.map((item) => (
        <SelectInputs
          key={item.id}
          data={item}
          value={filters[item.id] || ""}
          setFormData={(newVal) =>
            setFilters((prev) => ({
              ...prev,
              [item.id]: String(newVal[item.id] ?? newVal), // always string
            }))
          }
        />
      )),
    [filters, setFilters]
  );

  const titleStyles = useMemo(
    () => ({ fontWeight: 500, letterSpacing: 1 }),
    []
  );

  const filterBoxStyles = useMemo(() => ({ ...flexStart, gap: 3 }), []);

  const filterLabelStyles = useMemo(() => ({ letterSpacing: 1 }), []);

  return (
    <Stack direction="row" sx={{ ...flexBetween, mb: 2 }}>
      <Typography variant="body1" sx={titleStyles}>
        {title}
      </Typography>
      <Box sx={filterBoxStyles}>
        <Typography variant="body2" sx={filterLabelStyles}>
          Filter By
        </Typography>
        {filterSelects}
      </Box>
      {leads.length > 0 && <CreateLeads title={title} pageType="create" />}
    </Stack>
  );
};

export default React.memo(TableIntro);
