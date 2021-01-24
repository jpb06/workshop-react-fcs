import axios from "axios";

import { Dev } from "@owntypes/dev.type";

import { apiUrl } from "./api.config";

export const getDevs = async (): Promise<Array<Dev>> => {
  const result = await axios.get<Array<Dev>>(`${apiUrl}/devs`);
  return result.data;
};

export const getDevsBy = async (squads: Array<number>): Promise<Array<Dev>> => {
  const result = await axios.post<Array<Dev>>(`${apiUrl}/devsby`, { squads });
  return result.data;
};
