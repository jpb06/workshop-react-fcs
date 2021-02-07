import axios from "axios";

import { Dev } from "@sharedtypes/dev.interface";

import { devsUrl } from "./api.config";

export const getDevs = async (): Promise<Array<Dev>> => {
  const result = await axios.get<Array<Dev>>(devsUrl);
  return result.data;
};
