import React from "react";
import { mocked } from "ts-jest/dist/utils/testing";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { getDevs, getSquads } from "../../../mockApi/api";
import { devs, squads } from "../../../mockApi/data";
import { connectedRender } from "../../../tests-related/connected.render";
import { SquadFilter } from "./SquadFilter";

jest.mock("../../../mockApi/api");

describe("Squad filter component", () => {
  console.log = jest.fn(); // suppressing hooks logs

  mocked(getSquads).mockResolvedValue(squads);
  mocked(getDevs).mockResolvedValue(devs);

  it("should display no checkboxes when squads are loading", async () => {
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
      const checkbox = await screen.findByRole("checkbox", {
        name: new RegExp(`squad ${i}`, "i"),
      });
      expect(checkbox).toBeChecked();
    }
  });

  it("should uncheck on user click", async () => {
    connectedRender(<SquadFilter />);

    const squad1Checkbox = await screen.findByRole("checkbox", {
      name: /squad 1/i,
    });
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
