import React from "react";

import { getDevDescription } from "@logic/dev/getDevDescription";
import { devsMockData } from "@src/tests-related/data/devs.data";
import { setUseDevsBySquadReturnValue } from "@src/tests-related/mocks/useDevsBySquadQuery.mock";
import { DevFriendsContextWrapper } from "@src/tests-related/wrappers/DevFriends.context.wrapper";
import { render, screen } from "@testing-library/react";

import { DevsList } from "./DevsList";

jest.mock("@api/useDevsBySquadQuery.hook");

const wrapper = DevFriendsContextWrapper();

describe("DevsList component", () => {
  it("should display nothing if there is no data", () => {
    setUseDevsBySquadReturnValue(undefined);

    render(<DevsList />, { wrapper });

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
    setUseDevsBySquadReturnValue(devsMockData);

    render(<DevsList />, { wrapper });

    expect(
      screen.queryByRole("progressbar", { name: "circle-loading" })
    ).not.toBeInTheDocument();

    expect(screen.queryAllByRole("dev")).toHaveLength(2);

    screen.getByRole("dev", {
      name: getDevDescription(devsMockData[0]),
    });
    screen.getByRole("dev", {
      name: getDevDescription(devsMockData[1]),
    });
  });
});
