import { Typography, Box, Grid } from "@mui/material";
import React, { useCallback, useMemo } from "react";
import { leadFields } from "../constants/leadFormFields";
import InputsField from "./Inputs/InputsField";
import TextAreaInputs from "./Inputs/TextAreaInputs";
import SelectInputs from "./Inputs/SelectInputs";

const CustomForm = ({ useIn, pageType, onChange, formData, setFormData }) => {
  const visibleFields = useMemo(() => {
    if (useIn !== "lead") return [];
    return leadFields.filter((item) => item.showOn.includes(pageType));
  }, [useIn, pageType]);

  const handleSelectChange = useCallback(
    (id, value) => {
      setFormData((prev) => ({ ...prev, [id]: value }));
    },
    [setFormData]
  );

  const renderForm = useCallback(() => {
    switch (useIn) {
      case "auth":
        return <Typography>auth</Typography>;

      case "lead":
        return (
          <Grid container rowSpacing={2} columnSpacing={2}>
            {visibleFields.map((item) => {
              const isTextarea = item.type === "textarea";
              const isSelect = item.type === "select";

              return (
                <Grid
                  key={item.id}
                  size={{ xs: 12, sm: 12, md: isTextarea ? 12 : 6 }}
                >
                  {isTextarea && (
                    <TextAreaInputs
                      item={item}
                      formData={formData}
                      onChange={onChange}
                    />
                  )}

                  {isSelect && (
                    <SelectInputs
                      data={item}
                      value={formData[item.id] || ""}
                      size="medium"
                      setFormData={setFormData}
                      onChange={(e) =>
                        handleSelectChange(item.id, e.target.value)
                      }
                    />
                  )}

                  {!isTextarea && !isSelect && (
                    <InputsField
                      item={item}
                      formData={formData}
                      onChange={onChange}
                    />
                  )}
                </Grid>
              );
            })}
          </Grid>
        );

      default:
        return (
          <Typography sx={{ color: "#000" }}>
            Please provide where to use
          </Typography>
        );
    }
  }, [
    useIn,
    visibleFields,
    formData,
    onChange,
    setFormData,
    handleSelectChange,
  ]);
  return <Box>{renderForm()}</Box>;
};

export default React.memo(CustomForm);
