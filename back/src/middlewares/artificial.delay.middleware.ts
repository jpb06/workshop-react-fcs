import { NextFunction, Request, Response } from "express";

export const artificialDelayMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => setTimeout(next, 800);
