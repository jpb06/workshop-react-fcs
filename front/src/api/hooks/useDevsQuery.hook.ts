import { QueryObserverResult, useQuery } from "react-query";

import { Dev } from "@sharedtypes/dev.interface";

import { getDevs } from "../rest/getDevs";

export const useDevsQuery = (): QueryObserverResult<Array<Dev>> =>
  useQuery(["devs"], () => getDevs(), {});