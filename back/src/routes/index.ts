import express from "express";

import { devsRoute } from "./implementation/devs.route";
import { devsByRoute } from "./implementation/devsBy.route";
import { squadsRoute } from "./implementation/squads.route";

export const mainRouter = express.Router();

mainRouter.get("/", (_, res) => res.send("Hello hello"));

mainRouter.get("/squads", squadsRoute);
mainRouter.get("/devs", devsRoute);
mainRouter.post("/devsby", devsByRoute);
