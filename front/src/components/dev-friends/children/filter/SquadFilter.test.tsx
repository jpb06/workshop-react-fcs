import React from "react";

import { setUseSquadsReturnValue } from "@src/tests-related/mocks/useSquadQuery.mock";
import { DevFriendsContextWrapper } from "@src/tests-related/wrappers/DevFriends.context.wrapper";
import { render, screen } from "@testing-library/react";

import { SquadFilter } from "./SquadFilter";

jest.mock("@api/useSquadsQuery.hook");

const wrapper = DevFriendsContextWrapper();

describe("SquadFilter component", () => {
  it("should display nothing if there is no squads", () => {
    setUseSquadsReturnValue();

    render(<SquadFilter />, { wrapper });

    expect(screen.queryAllByRole("checkbox")).toHaveLength(0);
  });

  it("should display one checkbox per squad", () => {
    setUseSquadsReturnValue([
      { id: 1, squad: 1 },
      { id: 2, squad: 2 },
      { id: 3, squad: 3 },
    ]);

    render(<SquadFilter />, { wrapper });

    expect(screen.queryAllByRole("checkbox")).toHaveLength(3);
    screen.getByRole("checkbox", { name: "Squad 1" });
    screen.getByRole("checkbox", { name: "Squad 2" });
    screen.getByRole("checkbox", { name: "Squad 3" });
  });
});
