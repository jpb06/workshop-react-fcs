import { NextFunction, Request } from "express";

import { ApiResponse } from "@backtypes/api.response.interface";

export const errorsMiddleware = (
  err: any,
  req: Request,
  res: ApiResponse,
  next: NextFunction
) => {
  console.log("error", err);
  res.answer(err.status ? err.status : 500, `Error: ${err}`);
};
