import React, { useEffect, useMemo, useState } from "react";
import LeadTable from "../components/LeadTable";
import { useLocation, useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectLead } from "../store/slices/lead.slice";

const AllLeads = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const leads = useSelector((state) => state.lead.leads, shallowEqual);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (id && leads.length > 0) {
      const leadToEdit = leads.find((item) => item._id === id);
      if (leadToEdit) {
        dispatch(selectLead(leadToEdit));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOpenModal(true);
      }
    }
  }, [id, leads, dispatch]);

  const { pathname } = useLocation();

  const leadTitle = useMemo(() => {
    switch (pathname) {
      case "/leads":
        return "Leads";
      case "/leads/website":
        return "Website Leads";
      case "/leads/meta":
        return "Meta Leads";
      case "/leads/google":
        return "Google Leads";
      default:
        return "Leads";
    }
  }, [pathname]);
  return (
    <LeadTable
      title={leadTitle}
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
  );
};

export default React.memo(AllLeads);
