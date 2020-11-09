import { useState } from "react";

export const useSquadFilterForm = (
  onSquadsFiltered: (selectedSquads: Array<number>) => void
) => {
  const [formValues, setFormValues] = useState([true, true, true, true]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const index = parseInt(event.target.name, 10);

    const newValues = [...formValues];
    if (index !== -1) {
      newValues[index] = checked;
    }
    setFormValues(newValues);

    const selectedSquads = newValues
      .map((el, index) => (el ? index + 1 : undefined))
      .filter((el) => el !== undefined) as Array<number>;

    onSquadsFiltered(selectedSquads);
  };

  return { formValues, handleChange };
};
