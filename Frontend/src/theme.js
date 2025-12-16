import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  shadows: [
    "none",
    "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
    ...Array(23).fill("none"), 
  ],
  palette: {
    primary: {
      main: "#00A76F", // Green theme color (Screenshot's primary)
      light: "rgba(0, 167, 111, 0.16)", // Light green for active sidebar background
    },
    secondary: {
      main: "#1C252E", // Dark color for secondary text/elements
    },
    text: {
      primary: "#1C252E",
      secondary: "#637381",
      other: "#fff",
    },
    background: {
      default: "#fff", // Slightly off-white for main background
      paper: "#f4f6f8", // White for cards and components
      darkerCard: "#162024", // Deep dark color for the 'Welcome back' card
    },
    divider: "rgba(145, 158, 171, 0.24)", // Light separator color for header/sidebar borders
    // Action states for hover/selected items (used in sidebar)
    action: {
      hover: "rgba(0, 167, 111, 0.08)",
      selected: "rgba(0, 167, 111, 0.16)",
    },
  },

  // ----------------------------------------------------
  // 3. TYPOGRAPHY (Focusing on the requested font stack)
  // ----------------------------------------------------
  typography: {
    fontFamily: "'Inter', 'Poppins', 'Roboto', sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 500 },
    body1: { fontSize: "1rem" },
    body2: { color: "#637381", letterSpacing: 0.2 },
    overline: {
      // For subheaders like 'OVERVIEW' in the sidebar
      fontWeight: 700,
      fontSize: "0.75rem",
      textTransform: "uppercase",
    },
    // Custom style for the large 'Welcome back' name
    welcomeTitle: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#FFFFFF",
    },
  },

  // ----------------------------------------------------
  // 4. COMPONENTS OVERRIDES
  // ----------------------------------------------------
  components: {
    // Card Styling
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Consistent border radius
          boxShadow:
            "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)", // Using soft shadow 1
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: "#9DA4AE",
            opacity: 1,
            fontSize: "14px",
            fontWeight: 400,
          },
        },
      },
    },

    // Sidebar List Item Styling (Crucial for active/hover states)
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          padding: "12px 16px",
          margin: theme.spacing(0.5, 0),
          "&.Mui-selected": {
            backgroundColor: theme.palette.action.selected,
            color: theme.palette.primary.main,
            fontWeight: 600,
            "& .MuiListItemIcon-root": {
              color: theme.palette.primary.main,
            },
            "&:hover": {
              backgroundColor: theme.palette.action.selected,
            },
          },
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        }),
      },
    },

    // Icon Styling for Sidebar
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "36px",
          color: "#637381",
        },
      },
    },

    // Button Styling
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 500,
          letterSpacing: 0.5,
          // Default style matching the screenshot's 'GO NOW' button (which is dark)
          ...(ownerState.variant === "contained" &&
            ownerState.color === "secondary" && {
              backgroundColor: "#1c252e",
              "&:hover": {
                backgroundColor: "#000000",
              },
            }),
          // Primary button style
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#00A76F",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#007A5A",
              },
            }),
        }),
      },
    },

    // TextField Styling
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(145, 158, 171, 0.24)", // Softer default border
            },
            "&:hover fieldset": {
              borderColor: "black",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#00A76F",
              borderWidth: "1px",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#637381",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#00A76F",
          },
        },
      },
    },
  },
});

export default theme;
