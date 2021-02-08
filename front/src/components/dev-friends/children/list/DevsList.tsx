import React, { useContext } from "react";

import { useDevsBySquadQuery } from "@api/useDevsBySquadQuery.hook";
import { useReportOnErrors } from "@components/dev-friends/hooks/useReportOnErrors.hook";
import { useReportOnReady } from "@components/dev-friends/hooks/useReportOnReady.hook";

import { DevFriendsContext } from "../../contexts/DevFriendsContext.context";
import { Dev } from "./dev/Dev";

export const DevsList: React.FC = () => {
  const { selectedSquads } = useContext(DevFriendsContext);
  const { data: devs, isError } = useDevsBySquadQuery(selectedSquads);
  useReportOnErrors(isError);
  useReportOnReady(devs);

  if (!devs) return null;

  return (
    <>
      {devs.map((dev, index) => (
        <Dev key={index} id={index} {...dev} />
      ))}
    </>
  );
};
