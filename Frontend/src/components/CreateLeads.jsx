import { Button } from "@mui/material";
import React, { useCallback, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import FormModal from "./FormModal";

const CreateLeads = ({ title, pageType }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <Button onClick={handleOpen} variant="outlined" startIcon={<AddIcon />}>
        Create {title}
      </Button>

      {open && (
        <FormModal
          open={open}
          handleClose={handleClose}
          pageType={pageType}
          title="Create Lead"
        />
      )}
    </>
  );
};

export default React.memo(CreateLeads);
