import React, {useContext} from "react";
import {Formik} from "formik";
import { ModalFormBodyText } from "../../Globais/ModalBootstrap";
import { AventurasContext } from "../context/Aventuras";
// import { useGetTipoAventuras } from "../hooks/useGetTipoAventuras";
import { useGetTipoAventuras} from "../../TipoAventuras/hooks/useGetTipoAventuras";
import { usePostAventura } from "../hooks/usePostAventura";
import { usePatchAventura } from "../hooks/usePatchAventura";

export const AventuraForm = () => {
    const {showModalForm, setShowModalForm, stateFormModal} = useContext(AventurasContext);

    // usar essa sintaxe para mudar o nome da variavel que vem
    // const {isLoading, data: results} = useGetTipoAventuras();

    const {isLoading, data} = useGetTipoAventuras();
    const {results} = data;

    const {mutationPost} = usePostAventura();
    const {mutationPatch} = usePatchAventura();

    const handleSubmitFormModal = (values) => {
        // incluir validações

        let payload = {
            nome: values.nome,
            descricao: values.descricao,
            mestre: values.mestre,
            tipo_aventura: parseInt(values.tipo_aventura)
        }

        if(!values.id){
            mutationPost.mutate({payload: payload});
        }
        else{
            mutationPatch.mutate({idAventura: values.id, payload: payload});
        }

    }

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

                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Mestre</label>
                                            <input
                                                type="text"
                                                value={values.mestre}
                                                name="mestre"
                                                id="mestre"
                                                className="form-control"
                                                onChange={props.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Tipo aventura</label>
                                            <select
                                                value={values.tipo_aventura}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                name='tipo_aventura'
                                                id='tipo_aventura'
                                                className="form-control" 
                                            >
                                                <option value="">Selecione o tipo</option>
                                                {results && results.length > 0 && results.map((item, key) =>
                                                    <option key={key} value={item.id}>{item.nome}</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex bd-highlight mt-2">
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
                                            Começar nova aventura
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )
                    }}
                </Formik>
            </>
        )
    }

    if(isLoading){
        return
    }

    return (
        <ModalFormBodyText
            show={showModalForm}
            titulo={"Nova Aventura"}
            onHide={setShowModalForm}
            size='lg'
            bodyText={bodyTextArea()}
        />
    )
}