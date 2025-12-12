import React from "react";
import { Card, CardContent, Slide, Typography } from "@mui/material";
import { flexBetween } from "../constants/flexUtils";
import bgImg from "../assets/bg.webp";
import WelcomeCardContent from "./cardContents/WelcomeCardContent";

const Cards = ({ useIn, data }) => {
  const slider = useIn === "slider";

  const handleRenderCard = () => {
    switch (useIn) {
      case "welcomeCard":
        return <WelcomeCardContent />;
      case "slider":
        return (
          <CardContent sx={{ zIndex: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: "primary.main", fontWeight: 600 }}
              gutterBottom
            >
              {data.label}
            </Typography>
            <Typography
              variant="welcomeTitle"
              sx={{ color: "text.other" }}
            >
              {data.subLabels}
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc",mt:2 }}>
              {data.description}
            </Typography>
          </CardContent>
        );
      default:
        return <Typography>Please provide me Where to use It</Typography>;
    }
  };

  return (
    <Card
      sx={{
        minHeight: slider ? 335 : 350,
        p: slider ? 1 : 4,
        ...flexBetween,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${slider ? data.img : bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg,rgba(0,0,0,0.7) 5%, rgba(0,0,0,10))",
          zIndex: 1,
          border: "none",
          boxShadow: "none",
        },
      }}
    >
      {handleRenderCard()}
    </Card>
  );
};

export default Cards;
