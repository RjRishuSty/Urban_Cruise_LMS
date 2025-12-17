import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { Box, List, Divider, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavItem from "./NavItem";
import { navItems } from "../constants/navItems";
import { useLocation } from "react-router-dom";

const SIDEBAR_WIDTH = 280;
const MINI_SIDEBAR_WIDTH = 150;

const Sidebar = ({ isOpen }) => {
  const sidebarRef = useRef(null);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const activePath = location.pathname;
   const isTablet = useMediaQuery("(max-width:1139px)");
 
  useEffect(() => {
    const sidebar = sidebarRef.current; 
    if (!sidebar) return;

    const handleScroll = () => setShowScrollbar(sidebar.scrollTop > 50);

    sidebar.addEventListener("scroll", handleScroll);
    return () => sidebar.removeEventListener("scroll", handleScroll);
  }, []);

  const sidebarWidth = isOpen ? SIDEBAR_WIDTH : isTablet ? 0 : MINI_SIDEBAR_WIDTH;


  const scrollbarStyles = useMemo(
    () => ({
      "&::-webkit-scrollbar": {
        width: showScrollbar ? "8px" : "0px",
      },
      "&::-webkit-scrollbar-thumb": {
        bgcolor: showScrollbar ? "primary.main" : "transparent",
        borderRadius: 10,
      },
    }),
    [showScrollbar]
  );

  return (
    <Box
      ref={sidebarRef}
      sx={{
        width: sidebarWidth,
        height: "100vh",
        position: "fixed",
        bgcolor: "background.paper",
        borderRight: "1px solid rgba(145, 158, 171, 0.24)",
        overflowY: "auto",
        transition: "width 0.3s",
        zIndex: theme.zIndex.appBar + 1,
        ...scrollbarStyles,
      }}
    >
      <Box sx={{ p: 2, height: "100%" }}>
        <Box
          sx={{
            height: 64,
            p: 2,
            mb: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {isOpen ? "Urban Cruise" : "LMS"}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Box>

        <List disablePadding>
          {navItems.map((group, index) => (
            <React.Fragment key={group.subheader}>
              {isOpen && group.subheader && (
                <Typography
                  variant="overline"
                  sx={{
                    display: "block",
                    p: theme.spacing(2, 2.5, 1, 2.5),
                    color: theme.palette.text.secondary,
                  }}
                >
                  {group.subheader}
                </Typography>
              )}
              {group.items.map((item) => (
                <NavItem
                  key={item.title}
                  isOpen={isOpen}
                  {...item}
                  isActive={item.path === activePath}
                />
              ))}
              {isOpen && index < navItems.length - 1 && (
                <Divider sx={{ my: 1 }} />
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default memo(Sidebar);
