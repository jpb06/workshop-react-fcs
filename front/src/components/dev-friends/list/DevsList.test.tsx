import React from "react";
import { mocked } from "ts-jest/utils";

import { useDevsBySquadQuery } from "@api/useDevsBySquadQuery.hook";
import { getDevDescription } from "@logic/dev/getDevDescription";
import { render, screen } from "@testing-library/react";
import { mockDevFriendsContext } from "@tests/mocks/DevFriends.context.mock";

import { DevsList } from "./DevsList";

jest.mock("@api/useDevsBySquadQuery.hook");

const setSelectedSquadsMock = jest.fn();
const wrapper = mockDevFriendsContext(setSelectedSquadsMock);

describe("DevsList component", () => {
  it("should display a loading indicator if there is no data", () => {
    mocked(useDevsBySquadQuery).mockReturnValueOnce({ data: undefined } as any);

    render(<DevsList />, { wrapper });

    screen.getByRole("progressbar", { name: "circle-loading" });

    expect(screen.queryAllByRole("dev")).toHaveLength(0);
  });

  it("should display nothing if there is no devs", () => {
    mocked(useDevsBySquadQuery).mockReturnValueOnce({ data: [] } as any);

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

    mocked(useDevsBySquadQuery).mockReturnValueOnce({
      data: devs,
    } as any);

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
