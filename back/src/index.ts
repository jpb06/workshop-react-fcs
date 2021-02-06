import cors from "cors";
import express, { Express } from "express";

import { contextInitializationMiddleware } from "@middlewares/context.initialization.middleware";
import { errorsMiddleware } from "@middlewares/errors.middleware";
import { noRouteMiddleware } from "@middlewares/no.route.middleware";
import { responseMiddlewares } from "@middlewares/response.middlewares";

import { createMockDb } from "./dal/mockdb/logic/create.mock.db";
import { artificialDelayMiddleware } from "./middlewares/artificial.delay.middleware";
import { mainRouter } from "./routes";

createMockDb();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(responseMiddlewares);

// simulate delay
app.use(artificialDelayMiddleware);

app.use(contextInitializationMiddleware, mainRouter);

app.use(errorsMiddleware);
app.use(noRouteMiddleware);

const port = 3001;
app.listen(port, "", () => {
  console.log(`Workshop api running on port ${port}`);
});
