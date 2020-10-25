import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchDevsAction } from "../redux/actions";
import { devsSelector } from "../redux/selectors/devs.selector";
import { Dev } from "../types/dev.type";
import { useRootSelector } from "../types/use.root.selector";

export const useDevsInit = (): Array<Dev> => {
  const dispatch = useDispatch();
  const devs = useRootSelector(devsSelector);

  useEffect(() => {
    dispatch(fetchDevsAction([1, 2, 3, 4]));
  }, [dispatch]);

  return devs;
};
