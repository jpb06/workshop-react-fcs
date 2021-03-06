import { QueryObserverResult, useQuery } from "react-query";

import { Squad } from "@shared/types/squad.interface";

import { getSquads } from "../rest/getSquads";

export const useSquadsQuery = (): QueryObserverResult<Array<Squad>> =>
  useQuery("squads", getSquads, {});
