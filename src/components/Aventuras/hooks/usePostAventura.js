import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AventurasContext } from "../context/Aventuras";
import { postAventura } from "../../../services/aventuras/Aventuras.service";



export const usePostAventura = () => {
    const queryClient = useQueryClient();
    const {setShowModalForm} = useContext(AventurasContext);

    const mutationPost = useMutation({
        mutationFn: ({payload}) => {
            return postAventura(payload);
        },
        onSuccess: (data) => {
            console.log("Aventura criada com sucesso! ", data);

            // Refaz a lista
            queryClient.invalidateQueries(['aventuras-list']).then();
            setShowModalForm(false);
        },
        onError: (error) => {
            console.log("Erro ao criar aventura ", error.response);
        }
    });

    return {mutationPost};
}