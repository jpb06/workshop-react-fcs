import { mocked } from "ts-jest/utils";

import { useSquadsQuery } from "@api/useSquadsQuery.hook";

export const setUseSquadsReturnValue = (data: any) =>
  mocked(useSquadsQuery).mockReturnValue({ data } as any);
