import { ObjectId } from "bson";

interface RouteLogs {
  id: ObjectId;
  logs: Array<string>;
}

export abstract class RouteLogsService {
  private static routes: Array<RouteLogs> = [];

  public static add(id: ObjectId, data: string) {
    const routeLogs = this.routes.find((el) => el.id.equals(id));
    if (!routeLogs) {
      this.routes = [...this.routes, { id, logs: [data] }];
    } else {
      routeLogs.logs.push(data);
    }
  }

  public static get(id: ObjectId): Array<string> {
    const routeLogs = this.routes.find((el) => el.id.equals(id));
    if (!routeLogs) {
      return [];
    }

    return routeLogs.logs;
  }

  public static clear(id: ObjectId) {
    return this.routes.filter((el) => !el.id.equals(id));
  }
}
