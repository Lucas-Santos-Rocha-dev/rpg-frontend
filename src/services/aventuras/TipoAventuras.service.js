import api from "../api"

export const getTipoAventuras = async(filter, currentPage) => {
    const {nome} = filter;
    const response = await api.get(`tipo-aventuras/`, {
        params: {
            nome: nome,
            page: currentPage
        }
    });
    return response.data;
}