import { Grid } from "@mui/material";
import React from "react";
import Cards from "../components/Cards";
import SwiperSlider from "../components/SwiperSlider";

const Dashboard = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
      <Grid size={{ xs: 12, sm: 12, md: 8 }}>
        <Cards useIn="welcomeCard" />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 4 }}>
        <SwiperSlider />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
