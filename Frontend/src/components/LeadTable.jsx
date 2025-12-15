import { Table, TableHead, TableBody, Card, Divider } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSnackbar } from "notistack";
import { getAllLeads } from "../utils/leadFormHandler";
import TableIntro from "./table/TableIntro";
import TableBodyData from "./table/TableBodyData";
import TableHeader from "./table/TableHeader";
import FormModal from "./FormModal";
import TablePaginations from "./table/TablePaginations";
import TableSkeleton from "../loader/TableSkeleton";

const LeadTable = ({ title, openModal, setOpenModal }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filters, setFilters] = useState({ source: "", status: "", sort: "" });

  const { selectedLead } = useSelector(
    (state) => state.lead,
    shallowEqual
  );

  useEffect(() => {
    getAllLeads(setLoading, dispatch, enqueueSnackbar);
  }, [dispatch, enqueueSnackbar]);

  // const totalLeads = useMemo(() => leads.length, [leads]);

  // const handlePageChange = useCallback((newPage) => {
  //   setPage(newPage);
  // }, []);

  // const handleRowsPerPageChange = useCallback((size) => {
  //   setRowsPerPage(size);
  //   setPage(1);
  // }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  const showPagination = useMemo(() => {
    return filters && filters.source ? true : true; // Can adjust logic to hide if no leads
  }, [filters]);

  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <Card sx={{ p: 3 }}>
      <TableIntro title={title} filters={filters} setFilters={setFilters} />
      <Divider />

      <Table>
        <TableHeader />
        <TableBody>
          <TableBodyData title={title}
          setOpenModal={setOpenModal}
          currentPage={page}
          rowsPerPage={rowsPerPage}
          filters={filters}
          />
        </TableBody>
      </Table>

      {openModal && selectedLead && (
        <FormModal
          open={openModal}
          handleClose={handleCloseModal}
          pageType="update"
          title="Update Lead"
        />
      )}

      {showPagination && (
        <TablePaginations
          totalCount={10} // replace with filtered leads count dynamically
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(size) => setRowsPerPage(size)}
        />
      )}
    </Card>
  );
};

export default React.memo(LeadTable);
