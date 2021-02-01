import React from "react";

import { render, screen } from "@testing-library/react";
import { mockDevFriendsContext } from "@tests/mocks/DevFriends.context.mock";
import { mockUseSquadsQuery } from "@tests/mocks/useSquadQuery.mock";

import { SquadFilter } from "./SquadFilter";

jest.mock("@api/useSquadsQuery.hook");

const setSelectedSquadsMock = jest.fn();
const wrapper = mockDevFriendsContext(setSelectedSquadsMock);

describe("SquadFilter component", () => {
  it("should display nothing if there is no squads", () => {
    mockUseSquadsQuery(undefined);

    render(<SquadFilter />, { wrapper });

    expect(screen.queryAllByRole("checkbox")).toHaveLength(0);
  });

  it("should display one checkbox per squad", () => {
    mockUseSquadsQuery([1, 2, 3]);

    render(<SquadFilter />, { wrapper });

    expect(screen.queryAllByRole("checkbox")).toHaveLength(3);
    screen.getByRole("checkbox", { name: "Squad 1" });
    screen.getByRole("checkbox", { name: "Squad 2" });
    screen.getByRole("checkbox", { name: "Squad 3" });
  });
});
