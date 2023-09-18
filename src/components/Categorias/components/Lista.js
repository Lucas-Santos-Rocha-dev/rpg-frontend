import React, { useContext } from "react";
import { useGetCategorias } from "../hooks/useGetCategorias";
import { usePostCategoria } from "../hooks/usePostCategoria";
import { CategoriasContext } from "../context/Categorias";
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { ModalForm } from "./ModalForm";
import { usePatchCategoria } from "../hooks/usePatchCategoria";
import { useDeleteCategoria } from "../hooks/useDeleteCategoria";
import { useParams } from "react-router-dom";



export const Lista = () => {
    const { idAventura } = useParams();
    const {setShowModalForm, stateFormModal, setStateFormModal} = useContext(CategoriasContext);
    const {isLoading, data} = useGetCategorias(idAventura);
    const {mutationPost} = usePostCategoria();
    const {mutationPatch} = usePatchCategoria();
    const {mutationDelete} = useDeleteCategoria();
    
    // Necessária pela paginação
    const {results} = data;

    const acoesTemplate = (rowData) => {
        return (
            <div>
                <button type="button" className="btn btn-light" onClick={() => handleEditFormModal(rowData)}>
                    <span data-tip="Editar categoria" data-html={true}>
                        <FontAwesomeIcon
                            style={{fontSize: '20px', marginRight: "0", color: "#00585E"}}
                            icon={faEdit}
                        />
                        <ReactTooltip/>
                    </span>
                </button>

                <button type="button" className="btn btn-light" onClick={() => handleDelete(rowData)}>
                    <span data-tip="Editar categoria" data-html={true}>
                        <FontAwesomeIcon
                            style={{fontSize: '20px', marginRight: "0", color: "#00585E"}}
                            icon={faTrash}
                        />
                        <ReactTooltip/>
                    </span>
                </button>
            </div>
        )
    };

    const handleSubmitFormModal = async (values) => {
        let payload = {
            aventura: idAventura,
            nome: values.nome,
            descricao: values.descricao
        }

        if(!values.id){
            mutationPost.mutate({payload: payload});
        }
        else{
            mutationPatch.mutate({idCategoria: values.id, payload: payload});
        }
    }

    const handleEditFormModal = (rowData) => {
        setStateFormModal({
            ...stateFormModal,
            aventura: idAventura,
            id: rowData.id,
            nome: rowData.nome,
            descricao: rowData.descricao
        });
        setShowModalForm(true);
    }

    const handleDelete = (rowData) => {
        mutationDelete.mutate({idCategoria: rowData.id});
    }

    // Caso entre nesse return, não entra no proximo
    if(isLoading){
        return <p>carregando</p>
    }

    return (
        <>
            {results && results.length > 0 
                ?
                    <div className="p-2">
                        <DataTable
                            value={results}
                            stripedRows
                            tableStyle={{ minWidth: '50rem' }}
                            // className="tabela"
                        >
                            <Column
                                field="id"
                                header="ID"
                            />
                            <Column
                                field="nome"
                                header="Nome"
                            />
                            <Column
                                field="acao"
                                header="Ação"
                                body={acoesTemplate}
                                style={{width: '10%', textAlign: "center",}}
                            />
                        </DataTable>
                    </div>
                :
                    <div className="p-2">
                        <p><strong>Nenhum resultado encontrado.</strong></p>
                    </div>
            }

            <section>
                <ModalForm
                    handleSubmitFormModal={handleSubmitFormModal}
                />
            </section>
        </>
    )
}