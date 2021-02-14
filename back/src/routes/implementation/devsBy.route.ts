import { Request } from "express";

import { ApiResponse } from "@backtypes/api.response.interface";
import * as Dal from "@dal";
import { isNumber } from "@logic/regex";

export const devsByRoute = async (req: Request, res: ApiResponse) => {
  const squads = req.body?.squads;

  const isRequestValid =
    Array.isArray(squads) && squads.every((el) => isNumber(el));

  if (!isRequestValid) return res.answer(400, "Invalid request");

  const devs = await Dal.DevsStore.getFor(req.body.squads, res.locals.context);
  const sortedBySquad = devs.sort((a, b) => a.squad - b.squad);

  return res.populate(sortedBySquad);
};
