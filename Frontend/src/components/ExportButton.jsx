import React, { useMemo } from "react";
import { Button, Stack } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Map lead data to readable format
const mapLeadForExport = (lead) => ({
  "ID": lead._id,
  "Full Name": lead.name,
  "Email": lead.email,
  "Phone Number": lead.phone,
  "Service": lead.service,
  "Admin Id":lead.ownerId,
  "Source": lead.source,
  "Status": lead.status,
});

const ExportButton = ({ leads = [], filters = {} }) => {

  const filteredLeads = useMemo(() => {
    return leads
      .filter((lead) => {
        return (
          (!filters.source || lead.source === filters.source) &&
          (!filters.status || lead.status === filters.status)
        );
      })
      .map(mapLeadForExport);
  }, [leads, filters]);

  const handleExportExcel = () => {
    if (!filteredLeads || filteredLeads.length === 0) return;

    const worksheet = XLSX.utils.json_to_sheet(filteredLeads);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
    XLSX.writeFile(workbook, "leads.xlsx");
  };

  const handleExportPDF = () => {
    if (!filteredLeads || filteredLeads.length === 0) return;

    const doc = new jsPDF();
    const tableColumn = Object.keys(filteredLeads[0]);
    const tableRows = filteredLeads.map((lead) =>
      Object.values(lead).map((v) => (v === null ? "" : v))
    );

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: {
        fontSize: 8,
        cellPadding: 3,
        lineWidth: 0.1,
        lineColor: [0, 0, 0],
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
      },
      theme: "grid",
    });

    doc.text("Leads Report", 14, 15);
    doc.save("leads.pdf");
  };

  return (
    <Stack direction="row" spacing={2}>
     <Button
  id="export-excel-btn"
  variant="outlined"
  size="small"
  startIcon={<FileDownloadIcon />}
  onClick={handleExportExcel}
>
  Export Excel
</Button>

<Button
  id="export-pdf-btn"
  variant="outlined"
  size="small"
  startIcon={<FileDownloadIcon />}
  onClick={handleExportPDF}
>
  Export PDF
</Button>
    </Stack>
  );
};

export default React.memo(ExportButton);
