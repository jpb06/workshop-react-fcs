import { ObjectId } from "bson";
import { RouteLogsService } from "services/route.logs.service";

import { Squad } from "@shared/types/squad.interface";

import { getSquads } from "../logic";
import { log } from "../logic/logging";

export const getAll = async (context: ObjectId): Promise<Array<Squad>> => {
  const squads = await getSquads();

  RouteLogsService.add(context, log("squads", "Getting", squads.length));

  return squads;
};
