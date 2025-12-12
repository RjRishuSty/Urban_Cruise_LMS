import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Avatar,
  Typography,
  InputBase,
  Button,
} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useTheme } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { flexCenter } from "../constants/flexUtils";

const Header = ({ toggleSidebar, sidebarWidth, isOpen }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sidebarWidth}px)`,
        left: sidebarWidth,
        height: "auto",
        bgcolor: "background.default",
        boxShadow: "none",
        zIndex: theme.zIndex.appBar,
      }}
    >
      <Toolbar>
        <IconButton
          onClick={toggleSidebar}
          sx={{
            bgcolor: "primary.light",
            "&:hover": { bgcolor: "action.hover" },
          }}
        >
          {isOpen ? (
            <ChevronLeftIcon fontSize="medium" sx={{ color: "inherit" }} />
          ) : (
            <ChevronRightIcon fontSize="medium" sx={{ color: "inherit" }} />
          )}
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ ...flexCenter, gap: 1.5 }}>
          <Box
            component={Button}
            sx={{
              ...flexCenter,
              bgcolor: "primary.light",
              "&:hover": { bgcolor: "action.hover" },
            }}
          >
            <Typography variant="body2" sx={{ mr: 0.5, fontWeight: 500 }}>
              EN
            </Typography>
            <LanguageOutlinedIcon fontSize="small" color="action" />
          </Box>
          <IconButton
            sx={{
              bgcolor: "primary.light",
              "&:hover": { bgcolor: "action.hover" },
            }}
          >
            <Badge badgeContent={4} color="error" overlap="circular">
              <NotificationsNoneOutlinedIcon color="action" />
            </Badge>
          </IconButton>

          <IconButton
            sx={{
              bgcolor: "primary.light",
              "&:hover": { bgcolor: "action.hover" },
            }}
          >
            <SettingsOutlinedIcon color="action" />
          </IconButton>
          <Avatar
            alt="Jaydon Frankie"
            src="/static/images/avatar/1.jpg"
            sx={{
              height: 40,
              width: 40,
              ml: 1,
              color: "#000",
              boxShadow: 5,
              bgcolor: "primary.light",
              "&:hover": { bgcolor: "action.hover" },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
