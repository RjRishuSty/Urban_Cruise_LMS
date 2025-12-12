import { Box, Button, Typography } from "@mui/material";
import React from "react";
import character from "../../assets/character-present.webp";

const WelcomeCardContent = () => {
  return (
    <>
      <Box
        sx={{
          zIndex: 1,
          position: "relative",
          maxWidth: { md: 600 },
        }}
      >
        <Typography
          variant="welcomeTitle"
          gutterBottom
          sx={{ color: "text.other" }}
        >
          Welcome back 👋
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ color: "#fff", mb: 2, mt: 1 }}
        >
          Jaydon Frankie
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ccc",
            maxWidth: 450,
            mb: 3,
          }}
        >
          Manage all your business leads in one place. Track website, Meta and
          Google ad leads in real-time and convert faster.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          View Leads
        </Button>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            mt: 2,
            color: "#fff",
          }}
        >
          Your smart workspace for managing all sales activities.
        </Typography>
      </Box>

      <Box
        component="img"
        src={character}
        alt="Dashboard Illustration"
        sx={{
          width: { xs: 150, sm: 200, md: 250 },
          height: { xs: 150, sm: 200, md: 250 },
          zIndex: 2,
          userSelect: "none",
          pointerEvents: "none",
          objectFit: "contain",
        }}
      />
    </>
  );
};

export default WelcomeCardContent;
