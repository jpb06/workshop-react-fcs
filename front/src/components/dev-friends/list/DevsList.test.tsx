import React from "react";

import { getDevDescription } from "@logic/dev/getDevDescription";
import { render, screen } from "@testing-library/react";
import { mockDevFriendsContext } from "@tests/mocks/DevFriends.context.mock";
import { setUseDevsBySquadReturnValue } from "@tests/mocks/useDevsBySquadQuery.mock";

import { DevsList } from "./DevsList";

jest.mock("@api/useDevsBySquadQuery.hook");

const setSelectedSquadsMock = jest.fn();
const wrapper = mockDevFriendsContext(setSelectedSquadsMock);

describe("DevsList component", () => {
  it("should display a loading indicator if there is no data", () => {
    setUseDevsBySquadReturnValue(undefined);

    render(<DevsList />, { wrapper });

    screen.getByRole("progressbar", { name: "circle-loading" });

    expect(screen.queryAllByRole("dev")).toHaveLength(0);
  });

  it("should display nothing if there is no devs", () => {
    setUseDevsBySquadReturnValue([]);

    render(<DevsList />, { wrapper });

    expect(
      screen.queryByRole("progressbar", { name: "circle-loading" })
    ).not.toBeInTheDocument();

    expect(screen.queryAllByRole("dev")).toHaveLength(0);
  });

  it("should display a list of devs", () => {
    const devs = [
      { firstName: "Amine", squad: 3 },
      { firstName: "Arthur", squad: 3 },
    ];

    setUseDevsBySquadReturnValue(devs);

    render(<DevsList />, { wrapper });

    expect(
      screen.queryByRole("progressbar", { name: "circle-loading" })
    ).not.toBeInTheDocument();

    expect(screen.queryAllByRole("dev")).toHaveLength(2);

    screen.getByRole("dev", {
      name: getDevDescription(devs[0]),
    });
    screen.getByRole("dev", {
      name: getDevDescription(devs[1]),
    });
  });
});
