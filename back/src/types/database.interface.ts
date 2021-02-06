import { Dev } from "@sharedtypes/dev.interface";
import { Squad } from "@sharedtypes/squad.interface";

export default interface Database {
  squads: Array<Squad>;
  devs: Array<Dev>;
}
