import { QueryObserverResult } from "react-query";
import { MockedFunction } from "ts-jest/dist/utils/testing";
import { mocked } from "ts-jest/utils";

import { useDevsBySquadQuery } from "@api/useDevsBySquadQuery.hook";
import { Dev } from "@shared/types/dev.interface";
import { Squad } from "@shared/types/squad.interface";

export const setUseDevsBySquadReturnValue = (
  data: Array<Squad>
): MockedFunction<(squads?: Squad[]) => QueryObserverResult<Dev[], unknown>> =>
  mocked(useDevsBySquadQuery).mockReturnValueOnce({ data } as any);
