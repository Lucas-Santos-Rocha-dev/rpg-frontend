import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom';
import carousel1 from '../../../assets/img/carousel-1.jpg';
import carousel2 from '../../../assets/img/carousel-3.png';
import home from '../../../assets/img/home.jpg';
import { AventurasContext } from "../../Aventuras/context/Aventuras";
// import { ModalNovaAventuraForm } from "../../Aventuras/components/ModalNovaAventuraForm";

export const Opcoes = () => {
    const navigate = useNavigate();
    const {setShowModalForm,} = useContext(AventurasContext);

    return(
        <>
        <section className="row mt-4">
            <section className="col-4">
                <div class="card mb-3">
                    <img src={home} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Nova Aventura</h5>
                        <p class="card-text">Comece uma nova aventura do zero.</p>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-primary" onClick={() => setShowModalForm(true)}>
                                Go somewhere
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="col-4">
                <div class="card mb-3">
                    <img src={carousel2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Continuar Última Aventura</h5>
                        <p class="card-text">Continue sua última aventura jogada.</p>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-primary" onClick={() => navigate('/categorias/')}>
                                Go somewhere
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="col-4">
                <div class="card mb-3">
                    <img src={carousel1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Selecionar Aventura</h5>
                        <p class="card-text">Escolha a aventura que dejesa continuar de onde parou.</p>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-primary" onClick={() => navigate('/aventuras/')}>
                                Go somewhere
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <section className="row mt-4">
            <section className="col-4">
                <div class="card mb-3">
                    <img src={carousel2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Cadastros Gerais</h5>
                        <p class="card-text">Cadastros gerais para gerenciamento do RPG.</p>
                        <div class="d-flex justify-content-end">
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="col-4">
                <div class="card mb-3">
                    <img src={carousel2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Documentos de Apoio</h5>
                        <p class="card-text">Cadastros gerais para gerenciamento do RPG.</p>
                        <div class="d-flex justify-content-end">
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        {/* <section>
                <ModalNovaAventuraForm
                    handleSubmitFormModal={null}
                />
        </section> */}
    </>
        
    )
}