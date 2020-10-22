import { Dev } from "../types/dev.type";
import { devs, squads } from "./data";

const delay = (time = 1500) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const getDevs = async (): Promise<Array<Dev>> => {
  await delay();

  return devs;
};

export const getSquads = async (): Promise<Array<number>> => {
  await delay();

  return squads;
};
