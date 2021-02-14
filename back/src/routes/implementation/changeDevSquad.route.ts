import { Request } from "express";

import { ApiResponse } from "@backtypes/api.response.interface";
import * as Dal from "@dal";
import { isNumber } from "@logic/regex";

export const changeDevSquadRoute = async (req: Request, res: ApiResponse) => {
  const isRequestValid = isNumber(req.body.devId) && isNumber(req.body.squadId);
  if (!isRequestValid) return res.answer(400, "Invalid request");

  const context = res.locals.context;

  const devId = parseInt(req.body.devId, 10);
  const squadId = parseInt(req.body.squadId, 10);

  const devs = await Dal.DevsStore.getAll(context);
  const dev = devs.find((el) => el.id === devId);
  if (!dev) return res.answer(404, "Dev not found");

  const squads = await Dal.SquadsStore.getAll(context);
  const squad = squads.find((el) => el.id === squadId);
  if (!squad) return res.answer(404, "Squad not found");

  dev.squad = squad.id;
  await Dal.DevsStore.update(dev, context);

  return res.answer(200, `${dev.firstName} moved to squad ${squad.squad}`);
};
