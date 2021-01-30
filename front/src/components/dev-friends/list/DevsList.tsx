import React, { useContext } from "react";

import { useDevsBySquadQuery } from "@api/useDevsBySquadQuery.hook";
import { CircularLoading } from "@components/generic/circular-loading/CircularLoading";

import { DevFriendsContext } from "../contexts/DevFriendsContext.context";
import { Dev } from "./dev/Dev";

export const DevsList: React.FC = () => {
  const [squads] = useContext(DevFriendsContext);
  const { data: devs } = useDevsBySquadQuery(squads);

  if (!devs) return <CircularLoading />;

  return (
    <>
      {devs.map((dev, index) => (
        <Dev key={index} id={index} {...dev} />
      ))}
    </>
  );
};
