import React, { useState } from "react";

import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";

import { useSquadLoading } from "../../../hooks/useSquadLoading.hook";
import { LinearLoading } from "../../generic/LinearLoading";

interface SquadFilterProps {
  onSquadsFiltered: (selectedSquads: Array<number>) => void;
}

export const SquadFilter: React.FC<SquadFilterProps> = ({
  onSquadsFiltered,
}) => {
  const [squads, hasLoaded] = useSquadLoading();
  const [formValues, setFormValues] = useState([true, true, true, true]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const index = parseInt(event.target.name, 10);

    const newValues = [...formValues];
    if (index !== -1) {
      newValues[index] = checked;
    }
    setFormValues(newValues);

    const selectedSquads = newValues
      .map((el, index) => (el ? index + 1 : undefined))
      .filter((el) => el !== undefined) as Array<number>;

    onSquadsFiltered(selectedSquads);
  };

  if (!hasLoaded) {
    return <LinearLoading />;
  }

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
