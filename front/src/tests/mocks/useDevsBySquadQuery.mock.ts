import { mocked } from "ts-jest/utils";

import { useDevsBySquadQuery } from "@api/useDevsBySquadQuery.hook";

export const mockUseDevsBySquad = (data: any) =>
  mocked(useDevsBySquadQuery).mockReturnValueOnce({ data } as any);
