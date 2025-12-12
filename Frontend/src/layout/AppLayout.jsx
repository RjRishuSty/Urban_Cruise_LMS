import React, { useState } from "react";
import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AppLayout = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/sign-up";
  const isSignInPage = location.pathname === "/sign-in";
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarWidth = isSidebarOpen ? 280 : 150;
  const isAuthPage = isSignInPage || isSignUpPage;

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
          ml: !isAuthPage ? `${sidebarWidth}px` : 0, // no margin on auth pages
          p: !isAuthPage ? 2 : 0,
          width: "100%",
          minHeight: "100vh", // full height
          bgcolor: "background.default",
          transition: !isAuthPage ? "margin-left 0.3s" : "none",
          mt: !isAuthPage ? 7 : 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
