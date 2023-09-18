import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategoria } from "../../../services/categorias/Categorias.service";
import { useContext } from "react";
import { CategoriasContext } from "../context/Categorias";

export const useDeleteCategoria = () => {
    const queryClient = useQueryClient();
    const {setShowModalForm} = useContext(CategoriasContext);

    const mutationDelete = useMutation({
        mutationFn: ({idCategoria}) => {
            return deleteCategoria(idCategoria);
        },
        onSuccess: (data) => {
            console.log("Categoria deletada com sucesso ", data);

            // Refaz lista de categorias
            queryClient.invalidateQueries(['categorias-list']).then();
            setShowModalForm(false);
        },
        onError: (error) => {
            console.log("Erro ao deletar mandato ", error.response)
        },
    });

    return {mutationDelete}
}