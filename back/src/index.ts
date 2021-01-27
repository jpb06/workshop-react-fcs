import cors from "cors";
import express, { Express } from "express";

import { artificialDelayMiddleware } from "./middlewares/artificial.delay.middleware";
import { mainRouter } from "./routes";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// simulate delay
app.use(artificialDelayMiddleware);

app.use(mainRouter);

const port = 3001;
app.listen(port, "", () => {
  console.log(`Workshop api running on port ${port}`);
});
