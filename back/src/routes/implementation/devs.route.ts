import { Request } from "express";

import { ApiResponse } from "@backtypes/api.response.interface";
import * as Dal from "@dal";

export const devsRoute = async (req: Request, res: ApiResponse) => {
  const devs = await Dal.DevsStore.getAll(res.locals.context);

  return res.populate(devs);
};
