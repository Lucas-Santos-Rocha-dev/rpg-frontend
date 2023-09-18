import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchAventura } from "../../../services/aventuras/Aventuras.service";
import { useContext } from "react";
import { AventurasContext } from "../context/Aventuras";

export const usePatchAventura = () => {
    const queryClient = useQueryClient();
    const {setShowModalForm} = useContext(AventurasContext);

    const mutationPatch = useMutation({
        mutationFn: ({idAventura, payload}) => {
            return patchAventura(idAventura, payload);
        },
        onSuccess: (data) => {
            console.log("Aventura editada com sucesso ", data);

            // Refaz lista
            queryClient.invalidateQueries(['aventuras-list']).then();
            setShowModalForm(false);
        },
        onError: (error) => {
            console.log("Erro ao editar aventura ", error.response)
        },
    });

    return {mutationPatch}
}