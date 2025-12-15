import React, { useCallback } from "react";
import {
  IconButton,
  Stack,
  TableCell,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectLead } from "../store/slices/lead.slice";
import { handleDeleteLead } from "../utils/leadFormHandler";
import { useSnackbar } from "notistack";

const EditOrDeleteBtn = ({ item, setOpenModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleEdit = useCallback(() => {
    dispatch(selectLead(item));
    navigate(`/leads/${item._id}`);
    setOpenModal(true);
  }, [dispatch, navigate, item, setOpenModal]);

  
  const handleDelete = useCallback(async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );
    if (!confirmDelete) return;

    await handleDeleteLead(item._id, enqueueSnackbar, dispatch);
  }, [item._id, enqueueSnackbar, dispatch]);

  return (
    <TableCell>
      <Stack direction="row" spacing={1}>
        <Tooltip title="Update" arrow>
          <IconButton
            onClick={handleEdit}
            sx={{
              bgcolor: "secondary.main",
              color: "#fff",
              "&:hover": { bgcolor: "primary.main" },
            }}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete" arrow>
          <IconButton
            onClick={handleDelete}
            sx={{
              bgcolor: "secondary.main",
              color: "#fff",
              "&:hover": { bgcolor: "primary.main" },
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </TableCell>
  );
};

export default React.memo(EditOrDeleteBtn);
