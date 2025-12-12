import React, { useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { flexCenter, flexEnd } from "../constants/flexUtils";
import { authInputs } from "../constants/authInputs";
import { authObject } from "../constants/authObject";
import InputsField from "../components/InputsField";
import { useDispatch } from "react-redux";
import { authFormHandler } from "../utils/authFormHandler";
import { useSnackbar } from "notistack"; 

const AuthPages = () => {
  const { pathname } = useLocation();
   const { enqueueSnackbar } = useSnackbar(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleOnChage = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
       const result = await authFormHandler(formData, pageType, dispatch, enqueueSnackbar);

      if (result.success) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const pageType = pathname.includes("sign-in") ? "sign-in" : "sign-up";
  const {
    heading,
    subHeading,
    image,
    formTitle,
    formSubtitle,
    formLinkText,
    buttonLabel,
  } = authObject[pageType];
  console.log("Formdata", formData);
  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid
          size={{ xs: 12, sm: 12, md: 4 }}
          sx={{
            ...flexCenter,
            bgcolor: "background.paper",
          }}
        >
          <Stack sx={{ ...flexCenter, py: 5 }}>
            <Typography variant="h5" gutterBottom>
              {heading}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              sx={{
                color: "text.secondary",
                letterSpacing: 0.7,
                fontWeight: 500,
              }}
            >
              {subHeading}
            </Typography>
            <Box
              component="img"
              src={image}
              alt={heading}
              sx={{ width: "100%", padding: 5, mt: 3 }}
            />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 8 }} sx={{ ...flexCenter }}>
          <Stack
            sx={{
              width: { xs: "100%", sm: "100%", md: "60%" },
              p: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {formTitle}
            </Typography>
            <Typography variant="body2">
              {formSubtitle}{" "}
              <Typography
                variant="body2"
                component={Link}
                to={pageType === "sign-in" ? "/sign-up" : "/sign-in"}
                sx={{
                  color: "primary.main",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {formLinkText}
              </Typography>
            </Typography>
            <Grid
            component='form'
            onSubmit={handleSubmit}
              container
              rowSpacing={2}
              columnSpacing={2}
              sx={{ py: 2, mt: 3 }}
            >
              {authInputs[pageType].map((item) => {
                const fullname =
                  item.id === "firstName" || item.id === "lastName";
                const isSignIn = pageType === "sign-in" && item.id === "email";
                return (
                  <React.Fragment key={item.id}>
                    <Grid size={{ xs: 12, sm: 12, md: fullname ? 6 : 12 }}>
                      <InputsField
                        item={item}
                        formData={formData}
                        onChange={handleOnChage}
                      />
                    </Grid>
                    {isSignIn && (
                      <Grid
                        size={{ xs: 12, sm: 12, md: 12 }}
                        sx={{ ...flexEnd }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            cursor: "pointer",
                            mt: -0.5,
                            "&:hover": {
                              textDecoration: "underline",
                              color: "primary.main",
                            },
                          }}
                        >
                          Forget password?
                        </Typography>
                      </Grid>
                    )}
                  </React.Fragment>
                );
              })}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                 disabled={loading}
                sx={{ py: 1.5, textTransform: "uppercase" }}
              >
                {loading ? "Please wait..." : buttonLabel}
              </Button>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthPages;
