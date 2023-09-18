import React from "react";
import carousel1 from '../../../assets/img/carousel-1.jpg';
import home from '../../../assets/img/5f1bb675b574eaa734bf760a_banner-rpg-maker-mv.jpg';

export const Banner = () => {
    return(
        <section className="row">
            <div className="col-12">
                <div className="d-flex justify-content-center">
                    <img src={home} class="img-fluid" alt="..."/>
                    
                </div>
                
            </div>
        </section>
    )
}