import api from "../api"

export const getCategorias = async(idAventura, filter, currentPage) => {
    const {nome} = filter;
    const response = await api.get(`categorias-habilidades/`, {
        params: {
            nome: nome,
            idAventura: idAventura,
            page: currentPage
        }
    });
    return response.data;
}

export const postCategoria = async (payload) => {
    const response = await api.post('categorias-habilidades/', {
        ...payload
    });
    return response.data;
}

export const patchCategoria = async (idCategoria, payload) => {
    const response = await api.patch(`categorias-habilidades/${idCategoria}/`,{
        ...payload
    });
    return response.data;
}

export const deleteCategoria = async (idCategoria) => {
    const response = await api.delete(`categorias-habilidades/${idCategoria}/`);
    return response.data;
}