import { QueryObserverResult, useQuery } from "react-query";

import { Dev } from "@sharedtypes/dev.interface";
import { Squad } from "@sharedtypes/squad.interface";

import { getDevsBy } from "../rest/getDevsBy";

export const useDevsBySquadQuery = (
  squads?: Array<Squad>
): QueryObserverResult<Array<Dev>> =>
  useQuery(["devs", squads], () => getDevsBy(squads.map((el) => el.id)), {
    enabled: squads !== undefined,
  });
