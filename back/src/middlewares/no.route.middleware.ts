import { NextFunction, Request } from "express";

import { ApiResponse } from "@backtypes/api.response.interface";

export const noRouteMiddleware = (
  err: any,
  req: Request,
  res: ApiResponse,
  next: NextFunction
) => {
  const message = `No route for request ${req.url} (${req.method})`;

  console.log(message);
  res.answer(404, message);
};
