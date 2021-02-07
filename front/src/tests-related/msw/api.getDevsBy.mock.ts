import { RequestHandler, rest } from "msw";

import { Dev } from "@sharedtypes/dev.interface";
import { devsByUrl } from "@src/api/rest/api.config";

export const mockApiGetDevsBy = (
  data: Array<Dev>,
  status = 200
): RequestHandler =>
  rest.post(devsByUrl, (req, res, ctx) => {
    return res(ctx.status(status), ctx.json(data));
  });