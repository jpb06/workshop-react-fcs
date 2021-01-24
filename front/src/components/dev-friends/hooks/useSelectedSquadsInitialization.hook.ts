import { useContext, useEffect } from "react";

import { DevFriendsContext } from "../contexts/DevFriendsContext.context";

export const useSelectedSquadsInitialization = (squads: Array<number>) => {
  const [, setSelectedSquads] = useContext(DevFriendsContext);

  useEffect(() => {
    if (squads !== undefined) {
      setSelectedSquads(squads);
    }
  }, [squads]);
};
