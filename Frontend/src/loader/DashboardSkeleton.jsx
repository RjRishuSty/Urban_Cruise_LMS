import React from "react";
import { Box, Card, Skeleton, Grid, useTheme, Stack } from "@mui/material";
import { flexBetween } from "../constants/flexUtils";

const SIDEBAR_WIDTH = 280;
const HEADER_HEIGHT = 65;

const SidebarSkeleton = () => {
  const theme = useTheme();
  const overviewItems = Array(5).fill(0);
  const managementItems = Array(5).fill(0);

  return (
    <Box
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        height: "100vh",
        position: "fixed",
        bgcolor: theme.palette.background.paper,
        borderRight: `1px solid ${theme.palette.divider}`,
        p: 2,
      }}
    >
      <Skeleton
        variant="rectangular"
        width="100%"
        height={50}
        sx={{ mb: 4, borderRadius: 1, bgcolor: "rgba(0, 0, 0, 0.5)" }}
      />

      {/* OVERVIEW Section */}
      <Skeleton
        variant="text"
        width={"100%"}
        height={5}
        sx={{ mb: 2, bgcolor: "rgba(0, 0, 0, 0.5)" }}
      />
      {overviewItems.map((_, index) => (
        <Skeleton
          key={`ov-${index}`}
          variant="rectangular"
          width="100%"
          height={48}
          sx={{ mb: 1, borderRadius: 1, bgcolor: "rgba(0, 0, 0, 0.5)" }}
        />
      ))}

      <Skeleton
        variant="text"
        width="100%"
        height={5}
        sx={{ mt: 4, mb: 2, bgcolor: "rgba(0, 0, 0, 0.5)" }}
      />
      {managementItems.map((_, index) => (
        <Skeleton
          key={`mg-${index}`}
          variant="rectangular"
          width="100%"
          height={48}
          sx={{ mb: 1, borderRadius: 1, bgcolor: "rgba(0, 0, 0, 0.5)" }}
        />
      ))}
    </Box>
  );
};

// Header Skeleton
const HeaderSkeleton = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        left: SIDEBAR_WIDTH,
        height: HEADER_HEIGHT,
        position: "fixed",
        bgcolor: theme.palette.background.paper,
        zIndex: theme.zIndex.appBar,
        ...flexBetween,
        p: 2,
        pr: 3,
        mt:-8,
      }}
    >
      <Skeleton
        variant="circular"
        width={32}
        height={32}
        sx={{ mr: 1, bgcolor: "rgba(0, 0, 0, 0.5)" }}
      />
      <Stack direction='row'>
        <Skeleton
          variant="circular"
          width={32}
          height={32}
          sx={{ mr: 1, bgcolor: "rgba(0, 0, 0, 0.5)" }}
        />
        <Skeleton
          variant="circular"
          width={32}
          height={32}
          sx={{ mr: 1, bgcolor: "rgba(0, 0, 0, 0.5)" }}
        />
        <Skeleton variant="circular" width={32} height={32} sx={{bgcolor:"rgba(0, 0, 0, 0.5)" }} />
      </Stack>
    </Box>
  );
};


const HeroCardSkeleton = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        minHeight: 350,
        bgcolor: theme.palette.background.darkerCard,
        p: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        borderRadius: 2,
      }}
    >
      {/* Left Content Area */}
      <Box sx={{ zIndex: 1, maxWidth: { md: 600 } }}>
        <Skeleton
          variant="text"
          width={250}
          height={70}
          sx={{ bgcolor: "rgba(255, 255, 255, 0.4)", mb: 1 }}
        />
        <Skeleton
          variant="text"
          width={450}
          height={50}
          sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", maxWidth: 450, mb: 2 }}
        />
        <Skeleton
          variant="rectangular"
          width={120}
          height={40}
          sx={{ bgcolor: theme.palette.primary.main, borderRadius: 1.5, mt: 3 }}
        />
      </Box>

      <Skeleton
        variant="rectangular"
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: { xs: '100%', sm: '100%', md: '100%' },
          height: "100%",
          zIndex: 2,
          bgcolor: "rgba(255, 255, 255, 0.15)",
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
        }}
      />
    </Card>
  );
};

// 4. Main Dashboard Skeleton Component (The Layout)
const DashboardSkeleton = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
      }}
    >
      <SidebarSkeleton />
      <Box
        sx={{
          flexGrow: 1,
          ml: `${SIDEBAR_WIDTH}px`,
          pt: `${HEADER_HEIGHT}px`,
          minHeight: "100vh",
        }}
      >
        <HeaderSkeleton />
        <Box sx={{ p: 3, width: "100%" }}>
          <Grid container spacing={3}>
            <Grid size={{xs:12,sm:12,md:8}}>
              <HeroCardSkeleton />
            </Grid>
            <Grid size={{xs: 12, sm: 12, md: 4}}>
              <Card sx={{ p: 4, minHeight: 350, borderRadius: 2,bgcolor:theme.palette.background.darkerCard, }}>
                <Skeleton
                  variant="text"
                  width="60%"
                  height={70}
                  sx={{ mb: 1 ,bgcolor:"rgba(255, 255, 255, 0.4)"}}
                />
                <Skeleton
                  variant="text"
                  width="80%"
                  height={50}
                  sx={{ mb: 3 ,bgcolor:"rgba(255, 255, 255, 0.4)"}}
                />
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={100}
                  sx={{ borderRadius: 1,bgcolor:"rgba(255, 255, 255, 0.4)" }}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardSkeleton;
