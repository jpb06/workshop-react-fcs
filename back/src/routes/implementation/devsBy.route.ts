import { Request } from "express";

import { ApiResponse } from "@backtypes/api.response.interface";
import * as Dal from "@dal";

export const devsByRoute = async (req: Request, res: ApiResponse) => {
  const squads = req.body?.squads;

  const isRequestValid =
    Array.isArray(squads) && squads.every((el) => /^\d+$/.test(el));

  if (!isRequestValid) return res.answer(400, "Invalid request");

  const devs = await Dal.DevsStore.geyFor(req.body.squads, res.locals.context);

  return res.populate(devs);
};
