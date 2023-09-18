import { getTipoAventuras } from "../../../services/aventuras/TipoAventuras.service";
import { useQuery } from "@tanstack/react-query";
import { useContext, useMemo } from "react";
import { TipoAventurasContext } from "../context/TipoAventura";

export const useGetTipoAventuras = () => {

    const {filter, currentPage} = useContext(TipoAventurasContext);

    const { isLoading, isError, data = {count: 0, results: []}, error, refetch } = useQuery(
        ['tipo-aventuras-list', filter, currentPage],
        () => getTipoAventuras(filter, currentPage),
        {
            keepPreviousData: true,
            staleTime: 5000, // 5 segundos
            refetchOnWindowFocus: true // Caso saia da aba e voltar ele refaz a requisição
        }
    );

    const totalTipoAventuras = useMemo(() => data.results.length, [data]);
    const count = useMemo(() => data.count, [data]);

    return {isLoading, isError, data, error, refetch, totalTipoAventuras, count};
}