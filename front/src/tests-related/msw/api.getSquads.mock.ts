import { RequestHandler, rest } from "msw";

import { Squad } from "@sharedtypes/squad.interface";
import { squadsUrl } from "@src/api/rest/api.config";

export const mockApiGetSquads = (
  data: Array<Squad>,
  status = 200
): RequestHandler =>
  rest.get(squadsUrl, (req, res, ctx) => {
    return res(ctx.status(status), ctx.json(data));
  });
