import fs from "fs-extra";

import { LoggedResult } from "@backtypes/logged.result.interface";
import { Dev } from "@shared/types/dev.interface";
import { Squad } from "@shared/types/squad.interface";

import { getDbPath } from "./db.path";
import { getDevs, getSquads } from "./get.data";
import { Collection, log } from "./logging";

type PersistedType = Dev | Squad;

export const persist = async (
  item: PersistedType,
  type: Collection
): Promise<LoggedResult<PersistedType>> => {
  let data = await getBy(type);

  let logs: string;
  const existingItem = data.find((el) => el.id === item.id);
  if (existingItem) {
    data = data.map((el) => (el.id === item.id ? item : el));
    logs = log(type, "Modifying");
  } else {
    data.push(item);
    logs = log(type, "Adding");
  }

  await persistBy(type, data);
  return { data: item, logs };
};

const getBy = async (collection: Collection): Promise<Array<PersistedType>> => {
  let data: Array<PersistedType>;

  switch (collection) {
    case "squads":
      data = (await getSquads()) as Array<PersistedType>;
      break;
    case "devs":
      data = (await getDevs()) as Array<PersistedType>;
      break;
  }

  return data;
};

const persistBy = async (
  collection: Collection,
  data: Array<PersistedType>
) => {
  switch (collection) {
    case "squads":
      await persistAll({ squads: data as Array<Squad> });
      break;
    case "devs":
      await persistAll({ devs: data as Array<Dev> });
      break;
  }
};

interface PersistAllParams {
  squads?: Array<Squad>;
  devs?: Array<Dev>;
}

const persistAll = async ({ squads, devs }: PersistAllParams) => {
  const data = {
    squads: squads ?? (await getSquads()),
    devs: devs ?? (await getDevs()),
  };
  await fs.writeJson(getDbPath(), data);
};
