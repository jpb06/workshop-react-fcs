import chalk from "chalk";

export type Collection = "squads" | "devs";
export type AlterationType = "Modifying" | "Adding" | "Getting";

export const log = (
  collection: Collection,
  type: AlterationType,
  count?: number
): string =>
  `${chalk.cyanBright.bgGray.bold(" Mock DB ")} - ${type} ${collection}${
    count ? ` - ${count} results` : ""
  }`;
