import axios from "axios";
import { useMutation, UseMutationResult, useQueryClient } from "react-query";

import { changeDevSquadUrl } from "../rest/api.config";

interface ChangeDevSquadData {
  devId: number;
  squadId: number;
}

export const useChangeDevSquadMutation = (): UseMutationResult<unknown> => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (data: ChangeDevSquadData) => axios.post(changeDevSquadUrl, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("devs");
      },
    }
  );

  return mutation;
};
