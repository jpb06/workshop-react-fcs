import axios from "axios";

import { Squad } from "@sharedtypes/squad.interface";

import { changeDevSquadUrl } from "./api.config";

export const changeDevSquad = async (
  devId: number,
  squadId: number
): Promise<Array<Squad>> => {
  const result = await axios.post(changeDevSquadUrl, { devId, squadId });
  return result.data;
};
