import React from "react";
import carousel1 from '../../../assets/img/carousel-1.jpg';

export const SideRight = () => {
    return(
        <section className="col-4">
            <div class="card mb-3">
                <img src={carousel1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Aventuras</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </section>
    )
}