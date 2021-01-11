import React from "react";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { connectedRender } from "../../../tests-related/connected.render";
import { SquadFilter } from "./SquadFilter";

describe("Squad filter component", () => {
  console.log = jest.fn(); // suppressing hooks logs

  it("should display no checkboxes when squads are loading", () => {
    connectedRender(<SquadFilter />);

    expect(screen.queryAllByRole("checkbox")).toHaveLength(0);

    // expect(
    //   screen.queryByRole("checkbox", {
    //     name: /squad 1/i,
    //   })
    // ).not.toBeInTheDocument();
  });

  it("should display one checkbox by squad; each one should be checked", async () => {
    connectedRender(<SquadFilter />);

    for (let i = 1; i < 5; i++) {
      const checkbox = await screen.findByRole(
        "checkbox",
        {
          name: new RegExp(`squad ${i}`, "i"),
        },
        { timeout: 2000 }
      );
      expect(checkbox).toBeChecked();
    }
  });

  it("should uncheck on user click", async () => {
    connectedRender(<SquadFilter />);

    const squad1Checkbox = await screen.findByRole(
      "checkbox",
      {
        name: /squad 1/i,
      },
      { timeout: 2000 }
    );
    userEvent.click(squad1Checkbox);

    expect(squad1Checkbox).not.toBeChecked();

    for (let i = 2; i < 5; i++) {
      const checkbox = await screen.findByRole("checkbox", {
        name: new RegExp(`squad ${i}`, "i"),
      });
      expect(checkbox).toBeChecked();
    }
  });
});
