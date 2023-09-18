import React from "react";
// import Carousel1 from "../../../assets/img/carousel-1.jpg"
// import minhaImagem from './carousel-1.jpg';
import carousel1 from '../../../assets/img/carousel-1.jpg';
import carousel2 from '../../../assets/img/carousel-2.jpg';
import carousel3 from '../../../assets/img/carousel-3.png';
import '../home.css';


export const CarouselHome = () => {
    return(
        <section className="row">
            <section className="col-12">

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner carouselHome ">
                    <div className="carousel-item active">
                    <img src={carousel1} className="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={carousel2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={carousel3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </section>
            
        </section>
    )
}