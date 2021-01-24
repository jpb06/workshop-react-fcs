import axios from "axios";

import { apiUrl } from "./api.config";

export const getSquads = async (): Promise<Array<number>> => {
  const result = await axios.get<Array<number>>(`${apiUrl}/squads`);
  return result.data;
};
