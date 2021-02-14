import React, { useContext, useState } from "react";

import { useDevsBySquadQuery } from "@api/useDevsBySquadQuery.hook";
import { useReportOnErrors } from "@components/dev-friends/hooks/useReportOnErrors.hook";
import { useReportOnReady } from "@components/dev-friends/hooks/useReportOnReady.hook";

import { ChangeSquadModal } from "../change-squad-modal/ChangeSquadModal";
import { DevFriendsContext } from "../contexts/DevFriendsContext.context";
import { Dev } from "./dev/Dev";

export const DevsList: React.FC = () => {
  const { selectedSquads } = useContext(DevFriendsContext);
  const { data: devs, isError } = useDevsBySquadQuery(selectedSquads);
  useReportOnErrors(isError);
  useReportOnReady(devs);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDev, setSelectedDev] = useState(undefined);

  const handleDevSelected = (id: number) => {
    setSelectedDev(devs.find((el) => el.id === id));
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  if (!devs) return null;

  return (
    <>
      {devs.map((dev, index) => (
        <Dev key={index} onSelected={handleDevSelected} {...dev} />
      ))}
      <ChangeSquadModal
        isOpen={isModalOpen}
        dev={selectedDev}
        onClose={handleCloseModal}
      />
    </>
  );
};
