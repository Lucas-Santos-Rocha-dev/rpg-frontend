import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { CategoriasContext } from "../context/Categorias";
import { postCategoria } from "../../../services/categorias/Categorias.service";



export const usePostCategoria = () => {
    const queryClient = useQueryClient();
    const {setShowModalForm} = useContext(CategoriasContext);

    const mutationPost = useMutation({
        mutationFn: ({payload}) => {
            return postCategoria(payload);
        },
        onSuccess: (data) => {
            console.log("Categoria criada com sucesso! ", data);

            // Refaz a lista de categorias
            queryClient.invalidateQueries(['categorias-list']).then();
            setShowModalForm(false);
        },
        onError: (error) => {
            console.log("Erro ao criar categoria ", error.response);
        }
    });

    return {mutationPost};
}