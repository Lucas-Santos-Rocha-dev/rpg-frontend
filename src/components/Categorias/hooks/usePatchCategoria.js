import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchCategoria } from "../../../services/categorias/Categorias.service";
import { useContext } from "react";
import { CategoriasContext } from "../context/Categorias";

export const usePatchCategoria = () => {
    const queryClient = useQueryClient();
    const {setShowModalForm} = useContext(CategoriasContext);

    const mutationPatch = useMutation({
        mutationFn: ({idCategoria, payload}) => {
            return patchCategoria(idCategoria, payload);
        },
        onSuccess: (data) => {
            console.log("Categoria editada com sucesso ", data);

            // Refaz lista de categorias
            queryClient.invalidateQueries(['categorias-list']).then();
            setShowModalForm(false);
        },
        onError: (error) => {
            console.log("Erro ao editar mandato ", error.response)
        },
    });

    return {mutationPatch}
}