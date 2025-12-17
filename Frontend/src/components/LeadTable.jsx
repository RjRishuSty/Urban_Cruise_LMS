import { Table, TableHead, TableBody, Card, Divider } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getAllLeads } from "../utils/leadFormHandler";
import TableIntro from "./table/TableIntro";
import TableBodyData from "./table/TableBodyData";
import TableHeader from "./table/TableHeader";
import FormModal from "./FormModal";
import TablePaginations from "./table/TablePaginations";
import TableSkeleton from "../loader/TableSkeleton";

const LeadTable = ({ title, defaultFilters = {} }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filters, setFilters] = useState(defaultFilters);
  const [openModal, setOpenModal] = useState(false);

  const { leads, selectedLead } = useSelector(
    (state) => state.lead,
    shallowEqual
  );

  // Fetch all leads on mount
  useEffect(() => {
    getAllLeads(setLoading, dispatch);
  }, [dispatch]);

  // Sync filters if URL changes
  useEffect(() => {
    setFilters(defaultFilters);
  }, [defaultFilters]);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  // Filter leads based on filters
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      return (
        (!filters.source || lead.source === filters.source) &&
        (!filters.status || lead.status === filters.status) &&
        (!filters.sort || lead.sort === filters.sort)
      );
    });
  }, [leads, filters]);

  const showPagination = useMemo(() => {
    return filteredLeads.length > rowsPerPage;
  }, [filteredLeads.length, rowsPerPage]);

  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <Card sx={{ p: 3}}>
      {/* Filters */}
      <TableIntro title={title} filters={filters} setFilters={setFilters} filteredLeads={filteredLeads} />
      
      <Divider sx={{ my: 2 }} />

      {/* Table */}
      <Table>
        <TableHeader />
        <TableBody>
          <TableBodyData
            title={title}
            setOpenModal={setOpenModal}
            currentPage={page}
            rowsPerPage={rowsPerPage}
            filters={filters}
          />
        </TableBody>
      </Table>

      {/* Update Lead Modal */}
      {openModal && selectedLead && (
        <FormModal
          open={openModal}
          handleClose={handleCloseModal}
          pageType="update"
          title="Update Lead"
        />
      )}

      {/* Pagination */}
      {showPagination && (
        <TablePaginations
          totalCount={filteredLeads.length}
          currentPage={page}
          pageSize={rowsPerPage}
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(size) => setRowsPerPage(size)}
        />
      )}
    </Card>
  );
};

export default React.memo(LeadTable);
