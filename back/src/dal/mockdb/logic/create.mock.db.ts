import fs from "fs-extra";
import path from "path";

import { devs } from "../data/devs.data";
import { squads } from "../data/squads.data";
import { getDbDirectory } from "./db.path";

export const createMockDb = async () => {
  console.log("Creating mock db ...");

  const dbDirectory = getDbDirectory();
  await fs.ensureDir(dbDirectory);
  const filepath = path.join(dbDirectory, "db.json");
  const data = { devs, squads };

  await fs.writeJson(filepath, data);
  console.log("Mock DB created.\n");
};
