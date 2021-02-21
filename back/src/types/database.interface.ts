import { Dev } from "@shared/types/dev.interface";
import { Squad } from "@shared/types/squad.interface";

export default interface Database {
  squads: Array<Squad>;
  devs: Array<Dev>;
}
