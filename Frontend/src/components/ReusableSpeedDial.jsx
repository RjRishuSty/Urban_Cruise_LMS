import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import React from "react";

const ReusableSpeedDial = ({ ExportComponent, CreateComponent }) => {
  return (
    <>
      {/* Hidden real components */}
      <div style={{ display: "none" }}>
        {CreateComponent}
        {ExportComponent}
      </div>

      <SpeedDial
        ariaLabel="Lead actions"
        icon={<SpeedDialIcon />}
        direction="up"   // ✅ ONLY CHANGE
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
        }}
      >
        <SpeedDialAction
          icon={<AddIcon />}
          tooltipTitle="Create Lead"
          onClick={() =>
            document.getElementById("create-lead-btn")?.click()
          }
        />

        <SpeedDialAction
          icon={<FileDownloadIcon />}
          tooltipTitle="Export Excel"
          onClick={() =>
            document.getElementById("export-excel-btn")?.click()
          }
        />

        <SpeedDialAction
          icon={<PictureAsPdfIcon />}
          tooltipTitle="Export PDF"
          onClick={() =>
            document.getElementById("export-pdf-btn")?.click()
          }
        />
      </SpeedDial>
    </>
  );
};

export default React.memo(ReusableSpeedDial);
