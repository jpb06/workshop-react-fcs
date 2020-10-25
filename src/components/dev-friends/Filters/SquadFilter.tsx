import React, { useState } from "react";

import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";

import { useSquadsLoading } from "../../../hooks/useSquadsLoading.hook";
import { useSquadsSelectionChange } from "../../../hooks/useSquadsSelectionChange.hook";

export const SquadFilter = () => {
  const [formValues, setFormValues] = useState([true, true, true, true]);
  const [squads] = useSquadsLoading();
  const handleChange = useSquadsSelectionChange(formValues, setFormValues);

  return (
    <Grid container spacing={3} justify="center" alignItems="center">
      {squads.map((el, index) => (
        <FormControlLabel
          key={el}
          control={
            <Checkbox
              checked={formValues[index]}
              onChange={handleChange}
              style={{ transform: "scale(1.5)" }}
              name={`${index}`}
            />
          }
          label={`Squad ${el}`}
        />
      ))}
    </Grid>
  );
};
