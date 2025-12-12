import React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const NavItem = ({
  title,
  icon: Icon,
  path,
  hasArrow,
  isActive,
  isCollapsed,
  isOpen,
}) => {
  const theme = useTheme();

  return (
    <ListItemButton
      component={Link}
      to={path}
      sx={{
        display: "flex",
        flexDirection: isOpen ? "row" : "column",
        borderRadius: "8px",
        margin: theme.spacing(0.5, 1),
        padding: theme.spacing(1.5, 2),
        backgroundColor: isActive ? theme.palette.primary.light : "transparent",
        "&:hover": {
          backgroundColor: isActive
            ? theme.palette.primary.light
            : "rgba(0, 0, 0, 0.04)",
        },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
        {Icon && (
          <Icon
            fontSize={isOpen ? "medium" : "small"}
            sx={{ color: isActive ? theme.palette.primary.dark : "inherit" }}
          />
        )}
      </ListItemIcon>

      {!isCollapsed && (
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            fontWeight: isActive ? 600 : 500,
            color: isActive
              ? theme.palette.primary.dark
              : theme.palette.text.secondary,
            fontSize: isOpen ? "body1" : "0.7rem",
          }}
          sx={{ ml: 2 }}
        />
      )}

      {!isCollapsed && hasArrow && <ChevronRightIcon fontSize="small" />}
    </ListItemButton>
  );
};

export default NavItem;
