import { Button } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import FormModal from "./FormModal";

const CreateLeads = ({ pageType }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        id="create-lead-btn"
        onClick={() => setOpen(true)}
        variant="outlined"
        startIcon={<AddIcon />}
      >
        Create Lead
      </Button>

      {open && (
        <FormModal
          open={open}
          handleClose={() => setOpen(false)}
          pageType={pageType}
          title="Create Lead"
        />
      )}
    </>
  );
};


export default React.memo(CreateLeads);
