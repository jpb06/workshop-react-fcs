import { ObjectId } from "bson";
import { RouteLogsService } from "services/route.logs.service";

import { Dev } from "@sharedtypes/dev.interface";

import { getDevs } from "../logic";
import { log } from "../logic/logging";

export const getAll = async (context: ObjectId): Promise<Array<Dev>> => {
  const devs = await getDevs();
  RouteLogsService.add(context, log("devs", "Getting", devs.length));

  return devs;
};

export const getBy = async (
  idSquad: number,
  context: ObjectId
): Promise<Array<Dev>> => {
  const devs = await getDevs();

  const squadDevs = devs.filter((el) => el.squad === idSquad);
  RouteLogsService.add(context, log("devs", "Getting", squadDevs.length));

  return squadDevs;
};

export const geyFor = async (
  idSquads: Array<number>,
  context: ObjectId
): Promise<Array<Dev>> => {
  const devs = await getDevs();

  const squadsDevs = devs.filter((el) => idSquads.includes(el.squad));
  RouteLogsService.add(context, log("devs", "Getting", squadsDevs.length));

  return squadsDevs;
};
