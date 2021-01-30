import { useContext, useState } from "react";

import { DevFriendsContext } from "../contexts/DevFriendsContext.context";

type SquadSelectionChangeHookResult = [
  (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void,
  Array<boolean>
];

export const useSquadsSelectionChange = (): SquadSelectionChangeHookResult => {
  const [, setSelectedSquads] = useContext(DevFriendsContext);
  const [formValues, setFormValues] = useState([true, true, true, true]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const index = parseInt(event.target.name, 10);
    if (Number.isNaN(index) || ![0, 1, 2, 3].includes(index)) return;

    const newValues = [...formValues];
    newValues[index] = checked;
    setFormValues(newValues);

    const selectedSquads = newValues
      .map((el, index) => (el ? index + 1 : undefined))
      .filter((el) => el !== undefined) as Array<number>;
    setSelectedSquads(selectedSquads);
  };

  return [handleChange, formValues];
};
