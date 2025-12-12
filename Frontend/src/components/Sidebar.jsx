import React, { useEffect, useRef, useState } from "react";
import { Box, List, Divider, Typography } from "@mui/material";
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
  const activePath = location.pathname
  console.log(activePath);

  useEffect(() => {
    const sidebar = sidebarRef.current;

    const handleScroll = () => {
      if (sidebar.scrollTop > 50) {
        setShowScrollbar(true);
      } else {
        setShowScrollbar(false);
      }
    };

    if (sidebar) {
      sidebar.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Box
      ref={sidebarRef}
      sx={{
        width: isOpen ? SIDEBAR_WIDTH : MINI_SIDEBAR_WIDTH,
        flexShrink: 0,
        height: "100vh",
        position: "fixed",
        bgcolor: "background.paper",
        borderRight: "1px solid rgba(145, 158, 171, 0.24)",
        overflowX: "hidden",
        overflowY: "auto",
        transition: "width 0.3s",
        zIndex: theme.zIndex.appBar + 1,
        "&::-webkit-scrollbar": {
          width: showScrollbar ? "8px" : "0px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: showScrollbar ? "background.paper" : "transparent",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: showScrollbar ? "primary.main" : "transparent",
          borderRadius: "10px",
        },
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
            sx={{ fontWeight: 700, color: theme.palette.primary.main,textAlign:'center',textTransform:'uppercase' }}
          >
            {isOpen?'Urban Cruise':"LMS"}
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
              {isOpen && index < navItems.length - 1 && <Divider sx={{ my: 1 }} />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
