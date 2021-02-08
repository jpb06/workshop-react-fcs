import React from "react";

import { getDevDescription } from "@logic/dev/getDevDescription";
import { render, screen } from "@testing-library/react";

import { Dev } from "./Dev";

describe("Dev component", () => {
  it("should display a dev", () => {
    const firstName = "Yolo man";
    const squad = 1;

    render(<Dev id={1} firstName={firstName} squad={squad} />);

    screen.getByRole("dev", { name: getDevDescription({ firstName, squad }) });
  });

  it("should display a picture for the dev", () => {
    const firstName = "Yolo man";
    const squad = 1;

    render(<Dev id={1} firstName={firstName} squad={squad} />);

    screen.getByRole("img", { name: firstName });
  });
});
