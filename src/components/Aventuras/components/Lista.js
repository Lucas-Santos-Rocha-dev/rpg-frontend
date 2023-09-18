import React, { useContext } from "react";
import { useGetAventuras } from "../hooks/useGetAventuras";
import { AventurasContext } from "../context/Aventuras";
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useNavigate } from 'react-router-dom';


export const Lista = () => {
    const {setShowModalForm, stateFormModal, setStateFormModal} = useContext(AventurasContext);
    const {isLoading, data} = useGetAventuras();
    
    // Necessária pela paginação
    const {results} = data;

    const navigate = useNavigate();

    const handleNavigate = (url, idAventura) => {
        localStorage.setItem("idAventura", idAventura)
        navigate(`${url}/${idAventura}`)
    }

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

                <button type="button" className="btn btn-light" onClick={() => navigate(`/aventura-dashboard/${rowData.id}`)}>
                    <span data-tip="Editar categoria" data-html={true}>
                        <FontAwesomeIcon
                            style={{fontSize: '20px', marginRight: "0", color: "#00585E"}}
                            icon={faLongArrowAltRight}
                        />
                        <ReactTooltip/>
                    </span>
                </button>
            </div>
        )
    };

    const handleEditFormModal = (rowData) => {
        setStateFormModal({
            ...stateFormModal,
            id: rowData.id,
            nome: rowData.nome,
            descricao: rowData.descricao,
            mestre: rowData.mestre,
            tipo_aventura: rowData.tipo_aventura
        });
        setShowModalForm(true);
    }

    // Caso entre nesse return, não entra no proximo
    if(isLoading){
        return <p>carregando</p>
    }

    if(!results || results.length === 0){
        return (
            <div className="p-2">
                <p><strong>Nenhum resultado encontrado.</strong></p>
            </div>
        )
    }

    return (
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
                    field="descricao"
                    header="Descrição"
                />
                <Column
                    field="mestre"
                    header="Mestre"
                />
                <Column
                    field="tipo_aventura"
                    header="Tipo Aventura"
                />
                <Column
                    field="acao"
                    header="Ação"
                    body={acoesTemplate}
                    style={{width: '10%', textAlign: "center",}}
                />
            </DataTable>
        </div>
    )
}