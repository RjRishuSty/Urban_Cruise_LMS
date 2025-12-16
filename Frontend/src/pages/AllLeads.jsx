import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import LeadTable from "../components/LeadTable";

const AllLeads = () => {
  const { source } = useParams(); 

  const defaultFilters = useMemo(() => {
    return source ? { source } : {};
  }, [source]);

  return (
    <LeadTable
      title={source ? `${source} Leads` : "All Leads"}
      defaultFilters={defaultFilters}
    />
  );
};

export default AllLeads;
