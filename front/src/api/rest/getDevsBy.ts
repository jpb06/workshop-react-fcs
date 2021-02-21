import { Dev } from "@shared/types/dev.interface";

import { devsByUrl } from "./api.config";
import { post } from "./axios.wrappers";

export const getDevsBy = async (squads: Array<number>): Promise<Array<Dev>> => {
  const result = await post<Array<Dev>>(devsByUrl, { squads });
  return result;
};
