import React from "react";

import { Checkbox, FormControlLabel, Grid } from "@material-ui/core";

import { getSquads } from "../../../mockApi/api";
import { LinearLoading } from "../../generic/LinearLoading";

interface SqualFilterProps {
  onSquadsFiltered: (selectedSquads: Array<number>) => void;
}

interface SqualFilterState {
  squads: Array<number>;
  isLoading: boolean;
  fromValues: Array<boolean>;
}

export class SquadFilterClass extends React.Component<
  SqualFilterProps,
  SqualFilterState
> {
  constructor(props: SqualFilterProps) {
    super(props);
    this.state = {
      squads: [],
      isLoading: true,
      fromValues: [true, true, true, true],
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  async componentDidMount() {
    await this.getSquadsFromApi();
  }

  async getSquadsFromApi() {
    const squads = await getSquads();
    this.setState({ squads, isLoading: false });
  }

  handleCheckboxChange(
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) {
    const index = parseInt(event.target.name, 10);

    const newValues = [...this.state.fromValues];
    if (index !== -1) {
      newValues[index] = checked;
    }
    this.setState({ fromValues: newValues });

    const selectedSquads = newValues
      .map((el, index) => (el ? index + 1 : undefined))
      .filter((el) => el !== undefined) as Array<number>;

    this.props.onSquadsFiltered(selectedSquads);
  }

  render() {
    if (this.state.isLoading) {
      return <LinearLoading />;
    }

    return (
      <Grid container spacing={3} justify="center" alignItems="center">
        {this.state.squads.map((el, index) => (
          <FormControlLabel
            key={el}
            control={
              <Checkbox
                checked={this.state.fromValues[index]}
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
