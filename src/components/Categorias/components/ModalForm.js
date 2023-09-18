import React, {useContext} from "react";
import {Formik} from "formik";
import { ModalFormBodyText } from "../../Globais/ModalBootstrap";
import { CategoriasContext } from "../context/Categorias";

export const ModalForm = ({handleSubmitFormModal}) => {
    const {showModalForm, setShowModalForm, stateFormModal} = useContext(CategoriasContext);

    const bodyTextArea = () => {
        return (
            <>
                <Formik
                    initialValues={stateFormModal}
                    enableReinitialize={true}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={handleSubmitFormModal}
                >
                    {props => {
                        const { values, setFieldValue } = props;

                        return(
                            <form onSubmit={props.handleSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Nome</label>
                                            <input
                                                type="text"
                                                value={values.nome}
                                                name="nome"
                                                id="nome"
                                                className="form-control"
                                                onChange={props.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Descrição</label>
                                            <textarea
                                                value={values.descricao}
                                                name="descricao"
                                                id="descricao"
                                                className="form-control"
                                                onChange={props.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2">
                                    <div className="p-Y flex-grow-1 bd-highlight">
                                        {values.id &&
                                            <button
                                                //onClick={()=>setShowModalConfirmDeleteTag(true)}
                                                type="button"
                                                className="btn btn btn-danger mt-2 mr-2"
                                            >
                                                Apagar
                                            </button>
                                        }
                                    </div>

                                    <div className="p-Y bd-highlight">
                                        <button
                                            onClick={()=>setShowModalForm(false)}
                                            type="button"
                                            className={`btn btn-outline-success mt-2 mr-2`}
                                        >
                                            Cancelar
                                        </button>
                                    </div>

                                    <div className="p-Y bd-highlight">
                                        <button
                                            type="submit"
                                            className="btn btn btn-success mt-2"
                                            // disabled={bloquearBtnSalvarForm}
                                        >
                                            {stateFormModal.id ? "Salvar" : "Adicionar" }
                                        </button>
                                    </div>

                                </div>
                            </form>
                        );
                    }}
                </Formik>
            </>
        )
    }

    return (
        <ModalFormBodyText
            show={showModalForm}
            titulo={`${stateFormModal.id ? "Editar categoria" : "Adicionar categoria"}`}
            onHide={setShowModalForm}
            size='lg'
            bodyText={bodyTextArea()}
        />
    )
}