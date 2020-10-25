import React from "react";

import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";

interface SqualFilterProps {
  onSquadsFiltered: (selectedSquads: Array<number>) => void;
  squads: Array<number>;
}

interface SqualFilterState {
  formValues: Array<boolean>;
}

export class SquadFilterClass extends React.Component<
  SqualFilterProps,
  SqualFilterState
> {
  constructor(props: SqualFilterProps) {
    super(props);
    this.state = {
      formValues: [true, true, true, true],
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) {
    const index = parseInt(event.target.name, 10);

    const newValues = [...this.state.formValues];
    if (index !== -1) {
      newValues[index] = checked;
    }
    this.setState({ formValues: newValues });

    const selectedSquads = newValues
      .map((el, index) => (el ? index + 1 : undefined))
      .filter((el) => el !== undefined) as Array<number>;

    this.props.onSquadsFiltered(selectedSquads);
  }

  render() {
    return (
      <Grid container spacing={3} justify="center" alignItems="center">
        {this.props.squads.map((el, index) => (
          <FormControlLabel
            key={el}
            control={
              <Checkbox
                checked={this.state.formValues[index]}
                onChange={this.handleCheckboxChange}
                style={{ transform: "scale(1.5)" }}
                name={`${index}`}
              />
            }
            label={`Squad ${el}`}
          />
        ))}
      </Grid>
    );
  }
}
