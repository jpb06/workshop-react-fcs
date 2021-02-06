import { Request } from "express";

import { ApiResponse } from "@backtypes/api.response.interface";
import * as Dal from "@dal";

export const squadsRoute = async (req: Request, res: ApiResponse) => {
  const squads = await Dal.SquadsStore.getAll(res.locals.context);

  return res.populate(squads);
};
