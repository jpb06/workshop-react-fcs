import { Dev } from "@shared/types/dev.interface";

export const getDevDescription = (dev: Omit<Dev, "id">): string =>
  `${dev.firstName} - Squad ${dev.squad}`;
