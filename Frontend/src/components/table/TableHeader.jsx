import { TableCell, TableHead, TableRow } from "@mui/material";
import React, { useMemo } from "react";

const TableHeader = () => {

  const headers = useMemo(
    () => ["Name", "Email", "Phone", "Source", "Status", "Created", "Actions"],
    []
  );

  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header}>{header}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default React.memo(TableHeader);
