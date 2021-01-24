import { useQuery } from "react-query";

import { getDevsBy } from "../rest/getDevs";

export const useDevsBySquadQuery = (squads?: Array<number>) =>
  useQuery(["devs", squads], () => getDevsBy(squads), {
    enabled: squads !== undefined,
  });
