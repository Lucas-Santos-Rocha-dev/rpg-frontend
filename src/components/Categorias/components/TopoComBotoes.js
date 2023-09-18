import React, {useContext} from "react";
import { CategoriasContext } from "../context/Categorias";

export const TopoComBotoes = () => {
    const {setShowModalForm, setStateFormModal, initialStateFormModal} = useContext(CategoriasContext);

    return(
        <div className="d-flex bd-highlight align-items-center">
            <div className="p-2 flex-grow-1 bd-highlight">
                <h5 className="titulo-explicativo mb-0">Consulta de categorias</h5>
            </div>
            <div className="p-2 bd-highlight">
                <button
                    onClick={()=>{
                        setStateFormModal(initialStateFormModal);
                        setShowModalForm(true);
                    }}
                    className="btn btn-success"
                >
                    + adicionar categoria
                </button>
            </div>
        </div>
    )
}