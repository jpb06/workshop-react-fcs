import { useEffect, useState } from "react";

import { getDevs } from "../mockApi/api";
import { Dev } from "../types/dev.type";

export const useDevsLoading = (
  squads: Array<number>
): [Array<Dev>, boolean] => {
  const [devs, setDevs] = useState<Array<Dev>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    console.log(
      `useDevsLoading useEffect! squads=${squads} isFirstLoad=${isFirstLoad}`
    );
    let drop = false;

    const fetch = async () => {
      if (!isFirstLoad) setIsLoading(true);
      const data = await getDevs();
      const filteredDevs = data.filter((el) => squads.includes(el.squad));

      if (drop) return;
      setDevs(filteredDevs);
      setIsLoading(false);
      setIsFirstLoad(false);
    };

    fetch();

    return () => {
      console.log(`Dropping useDevsLoading effect squads=${squads}`);
      drop = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [squads]);

  return [devs, isLoading];
};
