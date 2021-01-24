import express from "express";

import { devs, squads } from "../data";

export const mainRouter = express.Router();

mainRouter.get("/", (req, res) => res.send("Hello hello"));

mainRouter.get("/squads", (req, res) => res.status(200).json(squads));
mainRouter.get("/devs", (req, res) => res.status(200).json(devs));
mainRouter.post("/devsby", (req, res) => {
  const squads = req.body?.squads;
  console.log("squads", squads);

  const isRequestValid =
    Array.isArray(squads) && squads.every((el) => /^\d+$/.test(el));

  if (!isRequestValid) return res.status(400).send();

  const squadsDevs = devs.filter(({ squad }) =>
    (squads as Array<number>).includes(squad)
  );
  return res.status(200).json(squadsDevs);
});
