import { useDispatch } from "react-redux";

import { fetchDevsAction } from "../redux/actions";

export const useSquadsSelectionChange = (
  formValues: Array<boolean>,
  setFormValues: React.Dispatch<React.SetStateAction<Array<boolean>>>
) => {
  const dispatch = useDispatch();

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

    dispatch(fetchDevsAction(selectedSquads));
  };

  return handleChange;
};
