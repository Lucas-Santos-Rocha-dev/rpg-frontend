import { getAventuras } from "../../../services/aventuras/Aventuras.service";
import {useQuery} from "@tanstack/react-query";
import { useContext, useMemo } from "react";
import { AventurasContext } from "../context/Aventuras";

export const useGetAventuras = () => {

    const {filter, currentPage} = useContext(AventurasContext);

    const { isLoading, isError, data = {count: 0, results: []}, error, refetch } = useQuery(
        ['aventuras-list', filter, currentPage],
        () => getAventuras(filter, currentPage),
        {
            keepPreviousData: true,
            staleTime: 5000, // 5 segundos
            refetchOnWindowFocus: true // Caso saia da aba e voltar ele refaz a requisição
        }
    );

    const totalAventuras = useMemo(() => data.results.length, [data]);
    const count = useMemo(() => data.count, [data]);

    return {isLoading, isError, data, error, refetch, totalAventuras, count};
}