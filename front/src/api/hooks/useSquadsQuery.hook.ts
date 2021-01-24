import { useQuery } from "react-query";

import { getSquads } from "../rest/getSquads";

export const useSquadsQuery = () => useQuery("squads", getSquads, {});
