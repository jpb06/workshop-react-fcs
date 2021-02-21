import React from "react";
import { useIsFetching } from "react-query";
import { mocked } from "ts-jest/utils";

import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { GlobalLoadingIndicator } from "./GlobalLoadingIndicator";

jest.mock("react-query");

describe("GlobalLoadingIndicator component", () => {
  it("should display a loading indicator if app is busy", () => {
    mocked(useIsFetching).mockReturnValueOnce(1);

    render(<GlobalLoadingIndicator />);

    screen.getByRole("progressbar", { name: "app-is-loading" });
  });

  it("should display nothing if app is not busy", () => {
    mocked(useIsFetching).mockReturnValueOnce(0);

    render(<GlobalLoadingIndicator />);

    expect(
      screen.queryByRole("progressbar", { name: "app-is-loading" })
    ).not.toBeInTheDocument();
  });
});
