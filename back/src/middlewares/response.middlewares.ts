import { ObjectId } from "bson";
import chalk from "chalk";
import { NextFunction, Request } from "express";

import { AnswerData, ApiResponse } from "@backtypes/api.response.interface";
import { RouteLogsService } from "@services/route.logs.service";

const logRouteResult = (
  req: Request,
  context: ObjectId,
  status: number,
  data: any
) => {
  console.log(
    `${new Date().toLocaleTimeString()} ${chalk.gray.bgWhiteBright.bold(
      " API route "
    )} - ${req.method} ${req.url} ${
      status === 200
        ? chalk.bgGreenBright.black(` ${status} `)
        : chalk.bgRedBright.white(` ${status} `) +
          chalk.bold.redBright(` : ${data}`)
    }`
  );

  const logs = RouteLogsService.get(context);
  if (logs.length > 0) {
    logs.forEach((el: string) =>
      console.log(`${new Date().toLocaleTimeString()} ${el}`)
    );
  }

  RouteLogsService.clear(context);
};

export const responseMiddlewares = (
  req: Request,
  res: ApiResponse,
  next: NextFunction
) => {
  res.populate = (data: any): ApiResponse => {
    let status = 200;
    let json = data;

    if (data === undefined) {
      status = 404;
      json = null;
    }

    logRouteResult(req, res.locals.context, status, json);
    return res.status(status).json(json);
  };
  res.answer = (status: number, data: any): ApiResponse => {
    logRouteResult(req, res.locals.context, status, data);
    return res.status(status).json(data);
  };
  res.answerFrom = (data: AnswerData): ApiResponse => {
    logRouteResult(req, res.locals.context, data.code, data.text);
    return res.status(data.code).json(data.text);
  };

  next();
};
