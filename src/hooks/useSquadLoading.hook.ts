import { useEffect, useState } from "react";

import { getSquads } from "../mockApi/api";

export const useSquadLoading = (): [Array<number>, boolean] => {
  const [squads, setSquads] = useState<Array<number>>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  const sideEffect = () => {
    console.log(`useSquadLoading useEffect! hasLoaded=${hasLoaded}`);
    const fetch = async () => {
      const data = await getSquads();
      setSquads(data);
      setHasLoaded(true);
    };

    if (!hasLoaded) fetch();
  };
  useEffect(sideEffect, [hasLoaded]);

  return [squads, hasLoaded];
};
