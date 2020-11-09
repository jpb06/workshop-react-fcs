import React from "react";

import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";

import { useSquadFilterForm } from "../../../hooks/useSquadFilterForm.hook";
import { useSquadLoading } from "../../../hooks/useSquadLoading.hook";
import { LinearLoading } from "../../generic/LinearLoading";

interface SquadFilterProps {
  onSquadsFiltered: (selectedSquads: Array<number>) => void;
}

export const SquadFilter: React.FC<SquadFilterProps> = ({
  onSquadsFiltered,
}) => {
  const [squads, hasLoaded] = useSquadLoading();
  const { formValues, handleChange } = useSquadFilterForm(onSquadsFiltered);

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
