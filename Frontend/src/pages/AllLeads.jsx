import React  from "react";
import { useLocation, useParams } from "react-router-dom";
import LeadTable from "../components/LeadTable";

const AllLeads = () => {
  const { source } = useParams();
  const { pathname } = useLocation();

  const initialFilters = source && source.length !== 24 ? { source } : {};

  const title = initialFilters.source
    ? `${initialFilters.source} Leads`
    : "All Leads";
  return <LeadTable title={title} defaultFilters={initialFilters} />;
};

export default AllLeads;
