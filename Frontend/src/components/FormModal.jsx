import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Box, Modal, Typography, Button, Stack, useMediaQuery } from "@mui/material";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import CustomForm from "./CustomForm";
import { handleCreateLead, handleUpdateLead } from "../utils/leadFormHandler";



const FormModal = ({ open, handleClose, title, pageType }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width:750px)");

  const { user } = useSelector((state) => state.auth, shallowEqual);
  const { selectedLead } = useSelector((state) => state.lead, shallowEqual);
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: isMobile?"95%":700,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: isMobile?3:5,
};
  const initialFormState = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      service: "",
      ownerId: user?._id || "",
      source: "",
      status: "",
    }),
    [user]
  );

  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  console.log("formModal",formData)
  useEffect(() => {
    if (pageType === "update" && selectedLead) {
      setFormData({
        name: selectedLead.name || "",
        email: selectedLead.email || "",
        phone: selectedLead.phone || "",
        service: selectedLead.service || "",
        ownerId:  user._id,
        source: selectedLead.source || "",
        status: selectedLead.status || "",
      });
    }

    if (pageType === "create") {
      setFormData(initialFormState);
    }
  }, [pageType, selectedLead, user, initialFormState]);

  const handleOnChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        let result;

        if (pageType === "update" && selectedLead) {
          result = await handleUpdateLead(
            selectedLead._id,
            formData,
            enqueueSnackbar,
            dispatch
          );
        } else {
          result = await handleCreateLead(formData, enqueueSnackbar, dispatch);
        }

        if (result?.success) handleClose();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [pageType, selectedLead, formData, enqueueSnackbar, dispatch, handleClose]
  );

  return (
    <Modal open={open} onClose={handleClose} sx={{width:'auto'}}>
      <Box sx={modalStyle}>
        <Typography variant="h6" mb={2}>
          {title}
        </Typography>

        <Stack
          component="form"
          onSubmit={handleSubmit}
          spacing={2}
          sx={{ mt: 3.5 }}
        >
          <CustomForm
            useIn="lead"
            pageType={pageType}
            onChange={handleOnChange}
            formData={formData}
            setFormData={setFormData}
          />

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button onClick={handleClose} color="inherit" disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" disabled={loading}>
              {loading ? "Please wait..." : "Submit"}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default React.memo(FormModal);
