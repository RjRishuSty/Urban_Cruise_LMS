import React, { useCallback, useMemo, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AppLayout = () => {
  const location = useLocation();
  const isAuthPage = useMemo(
    () => ["/sign-in", "/sign-up"].includes(location.pathname),
    [location.pathname]
  );

  const isTablet = useMediaQuery("(max-width:1139px)");

  // On tablet, sidebar is closed by default
  const [isSidebarOpen, setIsSidebarOpen] = useState(isTablet?false:true);

  const handleSidebarToggle = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  // Sidebar width logic
  const sidebarWidth = isSidebarOpen ? 280 : isTablet ? 0 : 150;

  return (
    <Box sx={{ display: "flex"}}>
      {/* Render Sidebar only if not auth page */}
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
          p:  isTablet ? 0 : !isAuthPage ? 2 : 0,
          width: "100%",
          minHeight: "90vh",
          bgcolor: "background.default",
          transition: "margin-left 0.3s",
          mt: !isAuthPage ? 7 : 0,
         
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
