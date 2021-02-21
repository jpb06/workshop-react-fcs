import React from "react";

import { screen, waitForElementToBeRemoved } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { devsMockData } from "@tests/data/devs.data";
import { squadsMockData } from "@tests/data/squads.data";
import { mockApiChangeDevSquad } from "@tests/msw/api.changeDevSquad.mock";
import { mockApiGetDevs } from "@tests/msw/api.getDevs.mock";
import { mockApiGetSquads } from "@tests/msw/api.getSquads.mock";
import { QueryProviderWrapper } from "@tests/wrappers/QueryProvider.wrapper";
import { setupMswServer } from "@tests/wrappers/setupMswServer";

import { ChangeSquadModal } from "./ChangeSquadModal";

describe("Change squad modal", () => {
  const { wrapper, queryClient } = QueryProviderWrapper();
  const dev = devsMockData[0];
  const handleClose = jest.fn();

  const { instance } = setupMswServer(
    mockApiGetSquads(squadsMockData),
    mockApiGetDevs(devsMockData),
    mockApiChangeDevSquad(devsMockData, squadsMockData)
  );

  beforeAll(() => instance.listen());
  afterEach(async () => {
    instance.resetHandlers();
    queryClient.clear();
    jest.resetAllMocks();
  });
  afterAll(() => instance.close());

  it("should display nothing if the modal is not opened", () => {
    render(
      <ChangeSquadModal onClose={handleClose} isOpen={false} dev={dev} />,
      { wrapper }
    );

    expect(
      screen.queryByRole("presentation", { name: /change-squad/i })
    ).not.toBeInTheDocument();
  });

  it("should display nothing if there is no dev", () => {
    render(<ChangeSquadModal onClose={handleClose} isOpen dev={null} />, {
      wrapper,
    });

    expect(
      screen.queryByRole("presentation", { name: /change-squad/i })
    ).not.toBeInTheDocument();
  });

  it("should display the modal", async () => {
    render(<ChangeSquadModal onClose={handleClose} isOpen dev={dev} />, {
      wrapper,
    });

    await screen.findByRole("presentation", { name: /change-squad/i });
    screen.getByRole("heading", { name: /Move Yolo man to another squad/i });
  });

  it("should display a loading indicator once data is being loaded", async () => {
    render(<ChangeSquadModal onClose={handleClose} isOpen dev={dev} />, {
      wrapper,
    });

    await screen.findByRole("presentation", { name: /change-squad/i });
    screen.getByRole("progressbar", { name: /circle-loading/i });
  });

  it("should display a list of squads once data has been loaded", async () => {
    render(<ChangeSquadModal onClose={handleClose} isOpen dev={dev} />, {
      wrapper,
    });

    await screen.findByRole("presentation", { name: /change-squad/i });
    await screen.findByRole("list", { name: /squads list/i });

    screen.getByText(/Yolo man currently belongs to squad 1/i);
    screen.getByRole("button", { name: /squad 2 1 members/i });
    screen.getByRole("button", { name: /squad 5 0 members/i });
  });

  it("should display a loading indicator when changing squad", async () => {
    render(<ChangeSquadModal onClose={handleClose} isOpen dev={dev} />, {
      wrapper,
    });

    await screen.findByRole("presentation", { name: /change-squad/i });
    await screen.findByRole("list", { name: /squads list/i });

    const button = screen.getByRole("button", { name: /squad 2 1 members/i });
    userEvent.click(button);

    await screen.findByRole("progressbar", { name: /circle-loading/i });
  });

  it("should close the modal once the squad has been changed", async () => {
    render(<ChangeSquadModal onClose={handleClose} isOpen dev={dev} />, {
      wrapper,
    });

    await screen.findByRole("presentation", { name: /change-squad/i });
    await screen.findByRole("list", { name: /squads list/i });

    const button = screen.getByRole("button", { name: /squad 2 1 members/i });
    userEvent.click(button);

    await screen.findByRole("progressbar", { name: /circle-loading/i });

    await waitForElementToBeRemoved(() =>
      screen.queryByRole("progressbar", { name: /circle-loading/i })
    );

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should close the modal", async () => {
    render(<ChangeSquadModal onClose={handleClose} isOpen dev={dev} />, {
      wrapper,
    });

    await screen.findByRole("presentation", { name: /change-squad/i });

    const button = screen.getByRole("button", { name: /nevermind/i });
    userEvent.click(button);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
