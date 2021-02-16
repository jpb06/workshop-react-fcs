import axios from "axios";

import { Dev } from "@sharedtypes/dev.interface";

import { devsByUrl } from "./api.config";

export const getDevsBy = async (squads: Array<number>): Promise<Array<Dev>> => {
  const result = await axios.post<Array<Dev>>(devsByUrl, { squads });
  return result.data;
};
