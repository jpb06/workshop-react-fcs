import { NextFunction, Request, Response } from "express";

import { newObjectId } from "@logic/objectId.logic";

export const contextInitializationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.context = newObjectId();

  return next();
};
