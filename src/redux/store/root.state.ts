import { Dev } from "../../types/dev.type";

export interface RootState {
  selectedSquads: Array<number>;
  devs: Array<Dev>;
  squads: Array<number>;
  isAppLoading: boolean;
}

export const initialState: RootState = {
  selectedSquads: [1, 2, 3, 4],
  devs: [],
  squads: [],
  isAppLoading: false,
};
