import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchSquadsAction } from "../redux/actions";
import { isAppLoadingSelector, squadsSelector } from "../redux/selectors";
import { useRootSelector } from "../types/use.root.selector";

export const useSquadsLoading = (): [Array<number>, boolean] => {
  const dispatch = useDispatch();
  const isLoading = useRootSelector(isAppLoadingSelector);
  const squads = useRootSelector(squadsSelector);

  useEffect(() => {
    console.log(`useSquadLoading useEffect!`);
    dispatch(fetchSquadsAction());
  }, [dispatch]);

  return [squads, isLoading];
};
