import React, {createContext, useMemo, useState } from "react";

const initialFilter = {
    nome: '',
};

const initialStateFormModal = {
    aventura: '',
    id: '',
    nome: '',
    descricao: '',
};

export const CategoriasContext = createContext({
    initialFilter: initialFilter,
    filter: initialFilter,
    setFilter: () => {},
    currentPage: 1,
    setCurrentPage: () => {},
    firstPage: 0,
    setFirstPage: () => {},
    showModalForm: false,
    setShowModalForm: () => {},
    stateFormModal: initialStateFormModal,
    setStateFormModal: () => {},
})

export const CategoriasProvider = ({children}) => {
    const [filter, setFilter] = useState(initialFilter);
    const [currentPage, setCurrentPage] = useState(1);
    const [firstPage, setFirstPage] = useState(1);
    const [showModalForm, setShowModalForm] = useState(false);
    const [stateFormModal, setStateFormModal] = useState(initialStateFormModal);
    

    const contextValue = useMemo(() => {
        return {
            initialFilter,
            filter,
            setFilter,
            currentPage,
            setCurrentPage,
            firstPage,
            setFirstPage,
            showModalForm,
            setShowModalForm,
            initialStateFormModal,
            stateFormModal,
            setStateFormModal
        };
    }, [filter, currentPage, firstPage, showModalForm, stateFormModal]);

    return (
        <CategoriasContext.Provider value={contextValue}>
            {children}
        </CategoriasContext.Provider>
    )
}