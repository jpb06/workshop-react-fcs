import React from "react";

import { getDevDescription } from "@components/dev-friends/list/dev/logic/getDevDescription";
import { render, screen } from "@testing-library/react";
import { devsMockData } from "@tests/data/devs.data";
import { setUseDevsBySquadReturnValue } from "@tests/mocks/useDevsBySquadQuery.mock";
import {
    DevFriendContextAndQueryProvidedWrapper
} from "@tests/wrappers/DevFriendContextAndQueryProvided.wrapper";

import { DevsList } from "./DevsList";

jest.mock("@api/useDevsBySquadQuery.hook");

const { wrapper } = DevFriendContextAndQueryProvidedWrapper();

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
