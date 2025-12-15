import {
  Box,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import CreateLeads from "../CreateLeads";
import { shallowEqual, useSelector } from "react-redux";
import EditOrDeleteBtn from "../EditOrDeleteBtn";
import { flexCenter } from "../../constants/flexUtils";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { useLocation } from "react-router-dom";

const TableBodyData = ({ title, setOpenModal, currentPage, rowsPerPage ,filters }) => {
  const leads = useSelector((state) => state.lead.leads, shallowEqual);
  const { pathname } = useLocation();
const sourceMap = {
    "/leads/website": "website",
    "/leads/meta": "meta",
    "/leads/google": "google",
  };
  const sourceFilter = filters.source || sourceMap[pathname] || null;

  // TODO: Filter leads by source & status
  const filteredLeads = useMemo(() => {
  return leads
    .filter((lead) =>
      filters.source
        ? String(lead.source).toLowerCase() === String(filters.source).toLowerCase()
        : true
    )
    .filter((lead) =>
      filters.status
        ? String(lead.status).toLowerCase() === String(filters.status).toLowerCase()
        : true
    );
}, [leads, filters.source, filters.status]);

  // TODO: Sort A→Z or Z→A
  const sortedLeads = useMemo(() => {
    if (!filters.sort) return filteredLeads;
    return [...filteredLeads].sort((a, b) =>
      filters.sort === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
  }, [filteredLeads, filters.sort]);

  // TODO: Pagination
   const paginatedLeads = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return sortedLeads.slice(start, start + rowsPerPage);
  }, [sortedLeads, currentPage, rowsPerPage]);

  const noDataStyles = { py: 10, textTransform: "uppercase" };

  if (!filteredLeads || filteredLeads.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={7}>
          <Box sx={{ ...flexCenter }}>
            <IconButton>
              <DoDisturbIcon />
            </IconButton>
            <Typography variant="body2" sx={noDataStyles}>
              No Leads Found in {title}
            </Typography>
          </Box>
        </TableCell>
      </TableRow>
    );
  }
  return (
    <>
      {paginatedLeads.map((item, index) => {
        const even = index % 2 === 0;
        return (
          <TableRow
            key={item._id}
            sx={{ bgcolor: even ? "primary.light" : "text.secondary" }}
          >
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.source}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>
              {item.createdAt
                ? new Date(item.createdAt).toLocaleDateString()
                : "-"}
            </TableCell>
            <EditOrDeleteBtn item={item} setOpenModal={setOpenModal} />
          </TableRow>
        );
      })}
    </>
  );
};

export default React.memo(TableBodyData);
