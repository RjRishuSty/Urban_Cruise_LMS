import React, { useCallback, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AppLayout = () => {
  const location = useLocation();
  const isAuthPage = useMemo(
    () => ["/sign-in", "/sign-up"].includes(location.pathname),
    [location.pathname]
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const sidebarWidth = isSidebarOpen ? 280 : 150;

  return (
    <Box sx={{ display: "flex" }}>
      {!isAuthPage && <Sidebar isOpen={isSidebarOpen} />}
      {!isAuthPage && (
        <Header
          isOpen={isSidebarOpen}
          toggleSidebar={handleSidebarToggle}
          sidebarWidth={sidebarWidth}
        />
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: !isAuthPage ? `${sidebarWidth}px` : 0,
          p: !isAuthPage ? 2 : 0,
          width: "100%",
          minHeight: "90vh",
          bgcolor: "background.default",
          transition: !isAuthPage ? "margin-left 0.3s" : "none",
          mt: !isAuthPage ? 7 : 0,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
