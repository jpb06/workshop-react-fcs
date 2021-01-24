import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";

import { artificialDelayMiddleware } from "./middlewares/artificial.delay.middleware";
import { mainRouter } from "./routes";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// simulate delay
app.use(artificialDelayMiddleware);

app.use(mainRouter);

const port = 3001;
app.listen(port, "", () => {
  console.log(`Workshop api running on port ${port}`);
});
