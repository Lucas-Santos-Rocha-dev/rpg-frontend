import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import capaCardRacas from '../../../assets/img/capa-card-racas.jpg';

export const Cards = () => {
    const { idAventura } = useParams();
    const navigate = useNavigate();

    return(
        <div>
            <h4>Cadastro de Habilidades</h4>
            <section className="row mt-4">
                <section className="col-4">
                    <div className="card mb-3">
                        <img src={capaCardRacas} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tipos de Habilidades</h5>
                            <p className="card-text">Cadastre os tipos de habilidades utilizados nessa aventura</p>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-primary" onClick={null}>
                                    Go somewhere
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="col-4">
                    <div className="card mb-3">
                        <img src={capaCardRacas} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Categorias de Habilidades</h5>
                            <p className="card-text">Cadastre as raças que serão utilizadas nessa aventura</p>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-primary" onClick={() => navigate(`/categorias-de-habilidade-da-aventura/${idAventura}`)}>
                                    Go somewhere
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="row mt-4">
                <section className="col-4">
                    <div className="card mb-3">
                        <img src={capaCardRacas} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Habilidades Automáticas</h5>
                            <p className="card-text">Cadastre as raças que serão utilizadas nessa aventura</p>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-primary" onClick={null}>
                                    Go somewhere
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="col-4">
                    <div className="card mb-3">
                        <img src={capaCardRacas} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Habilidades Extras</h5>
                            <p className="card-text">Cadastre as raças que serão utilizadas nessa aventura</p>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-primary" onClick={null}>
                                    Go somewhere
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <h4>Cadastros De Ficha</h4>
            <section className="row mt-4">
                <section className="col-4">
                    <div className="card mb-3">
                        <img src={capaCardRacas} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Raças</h5>
                            <p className="card-text">Cadastre as raças que serão utilizadas nessa aventura</p>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-primary" onClick={null}>
                                    Go somewhere
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}