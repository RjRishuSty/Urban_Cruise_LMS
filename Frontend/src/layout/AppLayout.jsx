import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const SIDEBAR_WIDTH = 280;
const HEADER_HEIGHT = 92;

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarWidth = isSidebarOpen ? 280 : 150;

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar isOpen={isSidebarOpen} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${sidebarWidth}px`,
          p: 5,
          minHeight: "70vh",
          bgcolor: "background.default",
          transition: "margin-left 0.3s",
          border:'2px solid blue',
          mt:7
        }}
      >
        <Header
        isOpen={isSidebarOpen}
          toggleSidebar={handleSidebarToggle}
          sidebarWidth={sidebarWidth}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
