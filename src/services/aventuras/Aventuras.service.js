import api from "../api"

export const getAventuras = async(filter, currentPage) => {
    const {nome} = filter;
    const response = await api.get(`aventuras/`, {
        params: {
            nome: nome,
            page: currentPage
        }
    });
    return response.data;
}

export const postAventura = async (payload) => {
    const response = await api.post('aventuras/', {
        ...payload
    });
    return response.data;
}

export const patchAventura = async (idAventura, payload) => {
    const response = await api.patch(`aventuras/${idAventura}/`,{
        ...payload
    });
    return response.data;
}
