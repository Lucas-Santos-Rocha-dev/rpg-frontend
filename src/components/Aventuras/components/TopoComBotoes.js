import React, {useContext} from "react";
import { AventurasContext } from "../context/Aventuras";

export const TopoComBotoes = () => {
    const {setShowModalForm, setStateFormModal, initialStateFormModal} = useContext(AventurasContext);

    return(
        <>
            <div className="d-flex bd-highlight align-items-center">
                <div className="p-2 flex-grow-1 bd-highlight">
                    <h5 className="titulo-explicativo mb-0">Consulta de aventuras</h5>
                </div>
                <div className="p-2 bd-highlight">
                    <button
                        onClick={()=>{
                            setStateFormModal(initialStateFormModal);
                            setShowModalForm(true);
                        }}
                        className="btn btn-success"
                    >
                        + adicionar aventura
                    </button>
                </div>
            </div>
        </>
    )
}