import { TableCell, TableHead, TableRow, useMediaQuery } from "@mui/material";
import React, { useMemo } from "react";

const TableHeader = () => {
  const isMobile = useMediaQuery("(max-width:850px)");

  const headers = useMemo(() => {
    const allHeaders = [
      "Name",
      "Email",
      "Phone",
      "Source",
      "Status",
      "Created",
      "Actions",
    ];

    if (isMobile) {
      return ["Name", "Email", "Actions"];
    }

    return allHeaders;
  }, [isMobile]);

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
