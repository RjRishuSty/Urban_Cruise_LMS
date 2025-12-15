import React, { memo, useMemo } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const NavItem = ({
  title,
  icon: Icon,
  path,
  hasArrow = false,
  isActive = false,
  isCollapsed = false,
  isOpen = true,
}) => {
  const theme = useTheme();

  
  const buttonSx = useMemo(
    () => ({
      display: "flex",
      flexDirection: isOpen ? "row" : "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 2,
      m: 0.5,
      px: 2,
      py: 1.5,
      bgcolor: isActive ? theme.palette.primary.light : "transparent",
      "&:hover": {
        bgcolor: isActive
          ? theme.palette.primary.light
          : theme.palette.action.hover,
      },
    }),
    [isOpen, isActive, theme]
  );

  const iconColor = isActive
    ? theme.palette.primary.dark
    : theme.palette.text.secondary;

  return (
    <ListItemButton
      component={Link}
      to={path}
      sx={buttonSx}
    >
      <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
        {Icon && (
          <Icon
            fontSize={isOpen ? "medium" : "small"}
            sx={{ color: iconColor }}
          />
        )}
      </ListItemIcon>

      {!isCollapsed && (
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            fontWeight: isActive ? 600 : 500,
            fontSize: isOpen ? "0.95rem" : "0.7rem",
            color: isActive
              ? theme.palette.primary.dark
              : theme.palette.text.secondary,
            noWrap: true,
          }}
          sx={{ ml: 2 }}
        />
      )}

      {!isCollapsed && hasArrow && (
        <ChevronRightIcon fontSize="small" color="action" />
      )}
    </ListItemButton>
  );
};

export default memo(NavItem);
