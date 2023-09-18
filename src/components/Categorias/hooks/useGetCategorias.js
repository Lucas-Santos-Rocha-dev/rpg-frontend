import { getCategorias } from "../../../services/categorias/Categorias.service";
import {useQuery} from "@tanstack/react-query";
import { useContext, useMemo } from "react";
import { CategoriasContext } from "../context/Categorias";

export const useGetCategorias = (idAventura) => {

    const {filter, currentPage} = useContext(CategoriasContext);

    const { isLoading, isError, data = {count: 0, results: []}, error, refetch } = useQuery(
        ['categorias-list', filter, currentPage],
        () => getCategorias(idAventura, filter, currentPage),
        {
            keepPreviousData: true,
            staleTime: 5000, // 5 segundos
            refetchOnWindowFocus: true // Caso saia da aba e voltar ele refaz a requisição
        }
    );

    const totalCategorias = useMemo(() => data.results.length, [data]);
    const count = useMemo(() => data.count, [data]);

    return {isLoading, isError, data, error, refetch, totalCategorias, count};
}