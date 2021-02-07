import { SetupServerApi } from "msw/lib/types/node/glossary";
import { RequestHandlersList } from "msw/lib/types/setupWorker/glossary";
import { setupServer } from "msw/node";
import { setLogger } from "react-query";

interface MswServer {
  instance: SetupServerApi;
  consoleLogMock: jest.Mock<any, any>;
  consoleWarnMock: jest.Mock<any, any>;
  consoleErrorMock: jest.Mock<any, any>;
}

export const setupMswServer = (...handlers: RequestHandlersList): MswServer => {
  const consoleLogMock = jest.fn();
  const consoleWarnMock = jest.fn();
  const consoleErrorMock = jest.fn();

  setLogger({
    log: consoleLogMock,
    warn: consoleWarnMock,
    error: consoleErrorMock,
  });

  const server = setupServer(...handlers);

  return {
    instance: server,
    consoleLogMock,
    consoleWarnMock,
    consoleErrorMock,
  };
};
