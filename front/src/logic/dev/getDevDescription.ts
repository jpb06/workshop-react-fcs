import { Dev } from "@owntypes/dev.type";

export const getDevDescription = (dev: Dev) =>
  `${dev.firstName} - Squad ${dev.squad}`;
