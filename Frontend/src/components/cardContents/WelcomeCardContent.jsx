import { Box, Button, Typography } from "@mui/material";
import React, { memo, useMemo } from "react";
import character from "../../assets/character-present.webp";
import {Link} from 'react-router-dom';
import { shallowEqual, useSelector } from "react-redux";

const WelcomeCardContent = () => {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const fullName = useMemo(
    () => `${user.firstName} ${user.lastName}`,
    [user.firstName, user.lastName]
  );
  const buttonStyles = useMemo(
    () => ({
      backgroundColor: "primary.main",
      "&:hover": {
        backgroundColor: "primary.dark",
      },
    }),
    []
  );
  const descriptionStyles = useMemo(
    () => ({
      color: "#ccc",
      maxWidth: 450,
      mb: 3,
    }),
    []
  );

  const captionStyles = useMemo(
    () => ({
      display: "block",
      mt: 2,
      color: "#fff",
    }),
    []
  );

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
          sx={{ color: "#fff", mb: 2, mt: 1,textTransform:'capitalize' }}
        >
        {fullName}
        </Typography>

        <Typography
          variant="body1"
          sx={descriptionStyles}
        >
          Manage all your business leads in one place. Track website, Meta and
          Google ad leads in real-time and convert faster.
        </Typography>
        <Button
        component={Link}
        to='/leads'
          variant="contained"
          color="primary"
          size="large"
          sx={buttonStyles}
        >
          View Leads
        </Button>

        <Typography
          variant="caption"
          sx={captionStyles}
        >
          Your smart workspace for managing all sales activities.
        </Typography>
      </Box>

      <Box
        component="img"
        src={character}
        alt="Dashboard Illustration"
        sx={{
          width: { xs: 150, sm: 200, md: "100%" },
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

export default memo(WelcomeCardContent);
